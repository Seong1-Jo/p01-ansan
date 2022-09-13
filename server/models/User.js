const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  //schema생성
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //trim은 abc eee@ 이메일 아이디에서 스페이스(공백)를 없애주는 역할을함
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    //관리자나 식별?
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //token 유효기간
    type: Number,
  },
});

/*암호화기능 부분 */
userSchema.pre("save", function (next) { //index.js에 줄36에 줄37에 있는 회원정보를 저장하기 전에 하는 함수!
  var user = this;

  if (user.isModified("password")) { //암호변환될때만 실행한다는 조건
    //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err); //next하면 index.js 줄36로 보내준다

      bcrypt.hash(user.password, salt, function (err, hash) { //플레인 password, hash는 암호화된비밀번호
        if (err) return next(err);
        user.password = hash;
        next();// 돌아간다
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //비교한다
  //plainPassword는 비밀번호1234567 정도로 생각하고 암호화된 비밀번호 : $2b$10$3sbs0fZeY5GFpbKpGTl4OerOQRNsAv7/FjC9br5OdHWqGsMGQaQ7G
  //실제비밀번호랑 암호환된 비밀번호랑 비교를 위해 실제비밀번호돈 암호화되게 만든다 또 그게 bcrypt
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;

  // jsonwebtoken을 이용해서 token을 생성하기

  var token = jwt.sign(user._id.toHexString(), "secretToken");

  // user._id + 'scretToken' = token
  // ->
  // 'scretToken' -> user._id

  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

/*복호화 */

userSchema.statics.findByToken = function (token, cb) { 
  var user = this;
  // console.log("user:", user);
  // console.log("token", token);

  //토큰을 decode한다
  jwt.verify(token, "secretToken", function (err, decoded) {
    // 유저 아이디를 이용해서 유저를 찾은 다음에
    //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인!
    // console.log("token", token);
    // console.log("jwt.decoded", decoded);
    // findOne은 몽도db에있는 메소드
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema); //인자의 1.모델이름, 2.Schema이름

module.exports = { User };

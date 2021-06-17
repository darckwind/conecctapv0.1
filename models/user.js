var mongoose =  require('mongoose');
var Schema  =  mongoose.Schema;
var bycrypt =  require('bcrypt');
var userSchema =  new Schema({
    name:{
        type: String,
        requiere: true
    },
    password: {
        type: String,
        require: true
    }
});

userSchema.pre('save', function(next){
    var user = this;
    if(this.isModified('password')|| this.isNew){
        bycrypt.genSalt(10, function(err,salt){
            if(err){
                return next(err)
            }
            bycrypt.hash(user.password,salt, function(err, hash){
                if (err){
                    return next(err);
                }
                user.password = hash;
                next()
            })
        })
    }else{
        return nuxt();
    }
});

userSchema.methods.comparePassword = function(passw, cb){
    bycrypt.compare(passw, this.password, function(err,isMatch){
        if(err){
            return cb(err);
        }
        cb(null, isMatch)
    });
};

module.exports = mongoose.model('User', userSchema);
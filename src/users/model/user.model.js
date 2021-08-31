const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const Schema = mongoose.Schema;




const userSchema = new Schema(
    {
        first_name: {
            type: String,
            default: null
        },
        last_name: {
            type: String,
            default: null
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "seller", "administrator"]
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        active: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: true
        },
        resetPasswordToken: {
            type: String,
            default: null
        },
        resetPasswordExpires: {
            type: Date,
            default: null
        },
        emailToken: {
            type: String,
            default: null
        },
        emailTokenExpires: {
            type: Date,
            default: null
        },
        accessToken: {
            type: String,
            default: null
        },
        referralCode: {
            type: String,
            unique: true
        },
        referrer: {
            type: String,
            default: null
        },
        address: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Address'
            }
        ],
        payement: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Payement'
            }
        ]
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

module.exports.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error("Hashing failed", error);
    }
};
module.exports.comparePasswords = async (inputPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(inputPassword, hashedPassword);
    } catch (error) {
        throw new Error("Comparison failed", error);
    }
};

import mongoose, {Schema} from "mongoose";

const tweetSchema = new Schema(
    {
        subscriber: {
            type: String,
            required: true 
        },
        owner: {
            type: Schema.Types.ObjectId,  
            ref: "User"
        },
    },
    {
        timestampss: true
    }
);

export const Tweet = mongoose.model("Tweet", tweetSchema)
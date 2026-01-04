import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema(
    {
        subscriber: {
            type: Schema.Types.ObjectId, // one who is Subscribed
            ref: "User"
        },
        channel: {
            type: Schema.Types.ObjectId, // one to whom 
            // 'subscriber' IS Subscribing 
            ref: "User"
        },
    },
    {
        timestampss: true
    }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema)
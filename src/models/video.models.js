import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginateV2 from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type:String, // cloudinary  url
            required: true
        },
        thumbnail: {
            type: String, // cloudinary url
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginateV2);

export const video = mongoose.model("Video", videoSchema)
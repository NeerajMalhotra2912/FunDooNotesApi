/*************************************************************************
 * Execution        : 1. default node       cmd> npm start
 *
 * Purpose          : To create schema for labels.
 *
 * @file            : label.js
 * @author          : Neeraj Malhotra
 * @version         : 1.0.0
 *
 **************************************************************************/
const mongoose = require('mongoose');
const labelSchema = mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true,
    versionKey: false,
});

const labelModel = mongoose.model('Label', labelSchema);
class LabelModel {
    /**
     * 
     * @param {*} data 
     * @description create and save the label
     */
    createLabel = async (data) => {
        const label = new labelModel({
            label: data.label,
            userId: data.userId,
        });
        const loadLabel = await label.save();
        return loadLabel;
    }
    /**
     * 
     * @param {*} data 
     * @description : updating the label
     */
    updateLabel = (data) => {
        return new Promise((resolve, reject) => {
            labelModel.findByIdAndUpdate(data.labelId, {
                label: data.label,
            })
                .then((label) => resolve(label))
                .catch((err) => reject(err));
        });
    }
    /**
     *  
     * @description : retrieve all the label created
     */
    retrieveLabels = () => {
        return new Promise((resolve, reject) => {
            labelModel.find()
                .then((labels) => resolve(labels))
                .catch((err) => reject(err));
        });
    }
    /**
     * 
     * @param {*} data 
     * @description : deleting the label created using lable id
     */
    deleteLabel = (data) => {
        return new Promise((resolve, reject) => {
            labelModel.findByIdAndRemove(data)
                .then((label) => resolve(label))
                .catch((err) => reject(err));
        });
    }
}
module.exports = new LabelModel();
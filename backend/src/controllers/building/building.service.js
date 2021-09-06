/**
 * @TODO : Mongoose modellek segítségével frissitsen egy 'building' entitást az adatbázisban.
 * - el kell menteni egy új "classroom" entitást.
 * - ki kell nyeri az új "classroom" id-ját.
 * - az id-t helyezze el a megfelelő 'Building' entitás 'classrooms' listájába
 *
 * A @getAll metódus adja vissza a populált teljes "building" listát
 */

const Model = require('../../models/building.model');

exports.create = requestData => {
    const entity = new Model(requestData);
    return entity.save();
};

exports.findOne = id => Model.findById(id);

exports.update = (buildingId, className) => Model.findByIdAndUpdate(buildingId, className, {
    new: true
});

exports.getAll = () => Model.find();

exports.delete = id => Model.findByIdAndRemove(id);
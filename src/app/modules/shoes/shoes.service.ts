import { shoesInterface } from "./shoe.interface";
import { ShoesModel } from "./shoe.models";

const createShoesIntoDb = async (shoes: shoesInterface) => {
  shoes.role="nosell"
  const newShoes = await ShoesModel.create(shoes);
  return newShoes;
};
const getShoesIntoDb = async () => {
  const newShoes = await ShoesModel.find();
  return newShoes;
};

const getShoeByFilter = async (filters: Partial<shoesInterface>) => {
  const filteredShoes = await ShoesModel.find(filters).exec();
  return filteredShoes;
};

const deleteSingleShoesFromDb = async (_id: string) => {
  const result = await ShoesModel.deleteOne({ _id });
  return result;
};

const getUpdateShoesData = async (
  id: string,
  updatedData: Partial<shoesInterface>
) => {
  const result = await ShoesModel.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const ShoesService = {
  createShoesIntoDb,
  getShoesIntoDb,
  deleteSingleShoesFromDb,
  getUpdateShoesData,
  getShoeByFilter,
};

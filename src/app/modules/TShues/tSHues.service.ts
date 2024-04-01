import { ShoesModel } from "./tSHues.model";
import { TshoesInterface } from "./tShues.interface";


const createShoesIntoDb = async (shoes: TshoesInterface) => {
  shoes.role="nosell"
  const newShoes = await ShoesModel.create(shoes);
  return newShoes;
};
const getShoesIntoDb = async () => {
  const newShoes = await ShoesModel.find();
  return newShoes;
};
const getSingleShoesIntoDb = async (id: string) => {
  const newShoes = await ShoesModel.findById(id);
  return newShoes;
};

const getShoeByFilter = async (filters: Partial<TshoesInterface>) => {
  const filteredShoes = await ShoesModel.find(filters).exec();
  return filteredShoes;
};

const deleteSingleShoesFromDb = async (_id: string) => {
  const result = await ShoesModel.deleteOne({ _id });
  return result;
};

const getUpdateShoesData = async (
  id: string,
  updatedData: Partial<TshoesInterface>
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
  getSingleShoesIntoDb
};

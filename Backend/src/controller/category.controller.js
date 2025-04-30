const categoryModel = require("../model/category.model");

const createCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    const isCategoryNameExist = await categoryModel.findOne({ name: name });

    if (isCategoryNameExist) {
      return res
        .status(400)
        .json(new apiError(400, null, null, `Category already exist`));
    }

    const category = new categoryModel({ name, image });
    await category.save();
    return res
      .status(201)
      .json(new apiResponse(201, "Category Created", category, false));
  } catch (error) {
    console.log("Error from createCategory controller", error);
    return res
      .status(500)
      .json(
        new apiError(
          500,
          null,
          null,
          `createCategory controller Error: ${error}`
        )
      );
  }
};

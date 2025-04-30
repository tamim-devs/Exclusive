const createCart = async (req, res) => {
  try {
    const { user } = req.body;
    const { product, qunatity } = req.body;
  } catch (error) {
    console.log("Error from createCart controller", error);
    return res
      .status(500)
      .json(
        new apiError(500, null, null, `createCart controller Error: ${error}`)
      );
  }
};

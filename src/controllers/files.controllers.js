// import { FoodStars } from "../models/foodStars.model.js";

export const createFiles= async ( req,res) => {
  // const {rating, commerceId} = req.body
  try {
    // const foodStarsRating = new FoodStars({rating, commerceId})    
    // await foodStarsRating.save()
    console.log(req.files)
    return res.status(200).json({ msg : "files" })

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const getFiles = async ( req,res) => {
  // const {commerceId} = req.params

  try {
    // const allRating = await FoodStars.find({commerceId})  

    // if (allRating.length === 0) return res.sendStatus(204)
    return res.status(200).json({ msg: "getFiles "})

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}

export const getOneFiles = async( req,res) => {
  // const {id} = req.params

  try {
    // const allRating = await FoodStars.find({commerceId:id}) 
 
    // if (allRating.length === 0) return res.sendStatus(204)
    // if (allRating.length === 1) return res.status(200).json({[id]: allRating[0].rating})

    // let sum = 0
    // const total = allRating.map((eachRating) => sum + eachRating.rating )
    // const average = total.reduce((a, b) => a + b, 0)/total.length;
    return res.status(200).json({ msg: "get one Files "})    

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}
export const updateFiles= async ( req,res) => {
  // const {rating, commerceId} = req.body
  try {
    // const foodStarsRating = new FoodStars({rating, commerceId})    
    // await foodStarsRating.save()
    console.log(req.files)
    return res.status(200).json({ msg : "update files" })

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}
export const deleteFiles= async ( req,res) => {
  // const {rating, commerceId} = req.body
  try {
    // const foodStarsRating = new FoodStars({rating, commerceId})    
    // await foodStarsRating.save()
    console.log(req.files)
    return res.status(200).json({ msg : "delete files" })

  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "sever error"})
  }
}
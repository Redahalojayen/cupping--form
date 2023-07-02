import { join } from '@prisma/client/runtime';
import { json } from 'express';

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

console.log('enterd ');
export default async function handler(req, res) {
    let {   sampleName, roastLevel, fragranceAroma,  flavor, afterTaste,acidity,body,balance,uniformity,cleanCup,sweetness,overall,notes,} =  req.body
  
  roastLevel = parseFloat(roastLevel);
  fragranceAroma =parseFloat(fragranceAroma);
  flavor = parseFloat(flavor);
  afterTaste = parseFloat(afterTaste);
  acidity = parseFloat(acidity);
  body = parseFloat(body);
  balance = parseFloat(balance);
  uniformity = parseFloat(uniformity);
  cleanCup = parseFloat (cleanCup);
  sweetness = parseFloat(sweetness);
  overall = parseFloat(overall);

    const newCupping = await prisma.cupping.create({
        data: {
          sampleName,
           roastLevel,
          fragranceAroma,
          flavor,
          afterTaste,
          acidity,
          body,
          balance,
          uniformity,
          cleanCup,
          sweetness,
          overall,
          notes,
        },
      });
  
    res.status(200).json(newCupping)
  }
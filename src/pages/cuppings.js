import { PrismaClient } from '@prisma/client'
import { Fragment } from 'react'

const prisma = new PrismaClient()

export async function getStaticProps() {
  // deletes the data
  // await prisma(dot)cupping(dot)deleteMany()//
  
  const cuppings = await prisma.cupping.findMany({
    select: {
      id: true,
      sampleName: true,
      roastLevel: true,
      fragranceAroma: true,
      flavor: true,
      afterTaste: true,
      acidity: true,
      body: true,
      balance: true,
      uniformity: true,
      cleanCup: true,
      sweetness: true,
      overall: true,
      notes: true,
      createdAt: true,
    },

    
  } )

 

  const formattedCuppings = cuppings.map((cupping) => ({
    ...cupping,
    createdAt: cupping.createdAt.toISOString(),
  }))

  return {
    props: { cuppings: formattedCuppings },
  }
}

export default function Cuppings({ cuppings }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">All Cuppings</h1>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Sample Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Roast Level
                </th>
               
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Score
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Notes
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cuppings.map((cupping) => (
                <tr key={cupping.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {cupping.sampleName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {cupping.roastLevel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {cupping.fragranceAroma + cupping.flavor + cupping.afterTaste + cupping.acidity + cupping.body + cupping.balance + cupping.uniformity + cupping.cleanCup + cupping.sweetness + cupping.overall}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {cupping.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(cupping.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}



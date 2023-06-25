import React, { useState } from 'react';

function Home() {
  const [sampleName, setSampleName] = useState('');
  const [roastLevel, setRoastLevel] = useState(1);
  const [fragranceAroma, setFragranceAroma] = useState(6);
  const [flavor, setFlavor] = useState(6);
  const [afterTaste, setAfterTaste] = useState(6);
  const [acidity, setAcidity] = useState(6);
  const [body, setBody] = useState(6);
  const [balance, setBalance] = useState(6);
  const [uniformity, setUniformity] = useState(6);
  const [cleanCup, setCleanCup] = useState(6);
  const [sweetness, setSweetness] = useState(6);
  const [overall, setOverall] = useState(6);
  const [notes, setNotes] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: ({ sampleName, roastLevel, fragranceAroma, flavor, afterTaste, acidity, body, balance, uniformity, cleanCup, sweetness, overall, notes }),
    })

    



    alert('Form submitted!');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold m-8">Welcome to the cupping page</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-4/5 lg:w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 m-4">
        <div className="mb-4">
          <label htmlFor="sampleName" className="block text-gray-700 font-bold mb-2">Sample Name: اسم العينة</label>
          <input type="text" id="sampleName" value={sampleName} onChange={(event) => setSampleName(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="roastLevel" className="block text-gray-700 font-bold mb-2">Roast Level: درجة التحميص</label>
          <input type="number" id="roastLevel" min="1" max="10" step="1" value={roastLevel} onChange={(event) => setRoastLevel(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="fragranceAroma" className="block text-gray-700 font-bold mb-2">Fragrance/Aroma: الرائحة</label>
          <input type="number" id="fragranceAroma" min="6" max="10" step="0.5" value={fragranceAroma} onChange={(event) => setFragranceAroma(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="flavor" className="block text-gray-700 font-bold mb-2">Flavor: النكهة</label>
          <input type="number" id="flavor" min="6" max="10" step='0.5' value={flavor} onChange={(event) => setFlavor(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="afterTaste" className="block text-gray-700 font-bold mb-2">After Taste: المذاق المتبقي</label>
          <input type="number" id="afterTaste" min="6" max="10" step='0.5' value={afterTaste} onChange={(event) => setAfterTaste(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="acidity" className="block text-gray-700 font-bold mb-2">Acidity: الحمضية</label>
          <input type="number" id="acidity" min="6" max="10" step='0.5' value={acidity} onChange={(event) => setAcidity(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-bold mb-2">Body: القوام</label>
          <input type="number" id="body" min="6" max="10" step='0.5' value={body} onChange={(event) => setBody(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="balance" className="block text-gray-700 font-bold mb-2">Balance: التوازن</label>
          <input type="number" id="balance" min="6" max="10" step='0.5' value={balance} onChange={(event) => setBalance(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="uniformity" className="block text-gray-700 font-bold mb-2">Uniformity: التماثل بين الأكواب </label>
          <input type="number" id="uniformity" min="6" max="10" value={uniformity} onChange={(event) => setUniformity(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="cleanCup" className="block text-gray-700 font-bold mb-2">Clean Cup: عدم وجود عنصر غريب</label>
          <input type="number" id="cleanCup" min="6" max="10" value={cleanCup} onChange={(event) => setCleanCup(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="sweetness" className="block text-gray-700 font-bold mb-2">Sweetness: الحلاوة</label>
          <input type="number" id="sweetness" min="6" max="10" value={sweetness} onChange={(event) => setSweetness(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="overall" className="block text-gray-700 font-bold mb-2">Overall: الإنطباع العام</label>
          <input type="number" id="overall" min="6" max="10" step='0.5' value={overall} onChange={(event) => setOverall(event.target.value)} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-gray-700 font-bold mb-2">Notes: الإيحائات و الملاخظات</label>
          <textarea id="notes" value={notes} onChange={(event) => setNotes(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Home;
import React from "react";

function Hero({ title, description, children }) {
  return (
    <section className="p-8 bg-gray-50 rounded-lg shadow-md">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* 
          Children container:
          - თუ კომპონენტს დაუკავშირებთ შიგნით ელემენტებს (მაგ: <button>, <a>, <p> და ა.შ.),
            ისინი მოხვდებიან აქ როგორც `children`.
          - `children` შეიძლება იყოს single element, array of elements ან უბრალოდ string.
        */}
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}

// App მაგალითი: ვხსნით Hero-ს ორ სხვადასხვა გზით
export default function App() {
  return (
    <div className="space-y-8 p-8">
      {/* 1) Hero მხოლოდ ერთი child ელემენტით */}
      <Hero
        title="გამარჯობა Hero 1"
        description="ეს არის პირველი Hero, რომელსაც გადავეცით მხოლოდ ერთი child ელემენტი."
      >
        {/* single child */}
        <button className="px-4 py-2 rounded bg-blue-600 text-white">მოქმედება</button>
      </Hero>

      {/* 2) Hero ორი child ელემენტით */}
      <Hero
        title="გამარჯობა Hero 2"
        description="ეს არის მეორე Hero, რომელსაც გადავეცით ორი child ელემენტი (button და link)."
      >
        {/* multiple children — children აქ არის array of elements */}
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded bg-green-600 text-white">Primary</button>
          <a href="#" className="px-4 py-2 rounded border">Learn more</a>
        </div>
      </Hero>

      {/* დამატებითი explanatory block (დემოსთვის) */}
      <div className="text-sm text-gray-500">
        {/*
          Comment explaining `children`:

          1. `children` არის ნებისმიერი JSX რომლითაც მომხმარებელი თავს ავსებს კომპონენტის ღილაკებს ან შინაარსს.
          2. როდესაც component-ი გამოიძახება როგორც container element (i.e. <Hero>...</Hero>),
             შიგნით რაც იქნება — გაიგზავნება როგორც `props.children`.
          3. თუ შიგნით არის მხოლოდ ერთი ელემენტი, `children` იქნება იგივე single element.
             თუ არის მრავალ ელემენტი — `children` იქნება array of elements.
          4. შეგიძლიათ გააკონტროლოთ children-ის ჩაწოდება ან მისწეროთ PropTypes/ტიპები (TypeScript) უფრო მკაცრად.
        */}
        ან თვისებრივად დაასრულეთ Hero კომპონენტის ტესტირება: უბრალოდ ჩასვით ეს ფაილი თქვენს React პროექტში (მაგ: create-react-app ან Vite) და დააინპორტეთ App component თქვენს index.js/tsx-ში.
      </div>
    </div>
  );
}

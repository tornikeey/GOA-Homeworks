import React from "react";


// Hero component
// Takes title, description, and children
function Hero({ title, description, children }) {
return (
<section className="p-8 bg-gray-50 rounded-lg shadow-md">
<h1 className="text-3xl font-bold mb-2">{title}</h1>
<p className="text-gray-700 mb-4">{description}</p>
{/* children = elements passed inside <Hero> ... </Hero> */}
<div>{children}</div>
</section>
);
}


// Example usage
export default function App() {
return (
<div className="space-y-8 p-8">
{/* Hero with one child */}
<Hero title="Hero 1" description="One child example">
<button className="px-4 py-2 rounded bg-blue-600 text-white">Click</button>
</Hero>


{/* Hero with two children */}
<Hero title="Hero 2" description="Two children example">
<button className="px-4 py-2 rounded bg-green-600 text-white">Save</button>
<a href="#" className="px-4 py-2 rounded border">Learn more</a>
</Hero>


{/* Explanation */}
<p className="text-sm text-gray-500">
- If you pass one element, children is a single element.<br />
- If you pass more than one, children is an array.
</p>
</div>
);
}
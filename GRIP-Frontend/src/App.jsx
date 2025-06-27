import React from 'react';
import Hero from './components/Hero';
import OrderForm from './components/OrderForm';

export default function App() {
  return (
    <div className="font-sans p-4">
      <Hero />
      <OrderForm />
    </div>
  );
}
import logo from './logo.svg';
// import './App.css';
import './tailwind.css'

function App() {
  return (
    <div className="App">
      1. <div class="w-32 h-32 bg-sky-200 pl-8 pr-4 py-8 m-4 rounded-3xl border border-sky-400"></div>
      <br />
      2. <br />div:
      <div class="bg-green-200 text-red-500 w-20 font-bold text-center">text</div>
      button:<br />
      <button class="bg-green-200 text-red-500 px-6 font-bold">text</button><br /><br />
      3. <button class="bg-sky-500 hover:bg-sky-700 rounded-full py-2 px-5 text-white font-bold">
        Save changes
      </button><br /><br />
      4. <button
        class="bg-purple-500 hover:bg-purple-600 rounded-full py-1 px-8 text-gray-700 font-bold ring-0 focus:ring-4 ring-orange-600">
        Button
      </button><br /><br />
      5. <br />
      <div class="justify-center flex">
        <button
          class="bg-orange-300 sm:bg-lime-400 md:bg-green-300 lg:bg-sky-400 py-1 px-8 text-gray-700 font-bold object-center">
          Button
        </button>
      </div>
      <br /><br />
    </div>
  );
}

export default App;

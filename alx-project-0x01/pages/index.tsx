import Header from "@/components/layout/Header";

const Home: React.FC = () => {

  return(
    <div className="flex flex-col h-screen">
      
      <Header/>

      <main className="bg-gradient-to-r from-blue-500 to-purple-600 flex-grow flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-5xl text-white font-bold">Welcome to our Application!</h1>
            <p className="mt-4 text-xl text-white">We're glad you're here. Explore and enjoy your experience.</p>
            <button className="cursor-pointer mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition ">Get Started</button>
        </div>
      </main>

    </div>

  )
}

export default Home;

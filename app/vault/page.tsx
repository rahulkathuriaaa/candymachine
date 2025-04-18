import Image from "next/image";
import Link from "next/link";

export default function VaultSelection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141429] to-[#2d1c3a] text-white relative overflow-hidden px-4 py-8">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Header Navigation */}
      <header className="max-w-7xl mx-auto flex justify-between items-center py-4 border-b border-white/10">
        <div>
          <Image 
            src="/logo.svg" 
            alt="Cluster Protocol Logo" 
            width={80} 
            height={80} 
            className="h-12 w-auto"
          />
        </div>
        
        <div className="flex items-center space-x-10">
          <Link href="#" className="hover:text-blue-300 transition-colors">
            Cluster Products
          </Link>
          <Link href="#" className="hover:text-blue-300 transition-colors">
            FAQ
          </Link>
          <Link href="/vault/play" className="bg-gradient-to-r from-[#F8D377] to-[#F6B94B] text-[#111] px-5 py-2 rounded-md font-medium hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
            PLAY NOW
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto mt-20 text-center relative z-10">
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Choose Your AI Vault</h1>
        <p className="text-[#a8b3cf] max-w-2xl mx-auto mb-16 text-lg">
          Explore exclusive AI-powered vaults with unique rewards and opportunities
          <br />Unlock your potential in the decentralized ecosystem
        </p>

        {/* Vault Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Vault Card */}
          <div className="border border-[#2a2d6a] rounded-2xl bg-gradient-to-b from-[#1e1d42] to-[#14132a] p-5 pb-8 relative overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Project Vault</h2>
              <p className="text-[#a8b3cf] text-sm mb-6">Presented by ProjectName</p>
              
              <div className="h-64 flex justify-center items-center relative">
                <div className="w-44 h-44 rounded-full bg-[#0e0d28] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute w-36 h-36 rounded-full border border-[#2763f8]/30 animate-pulse"></div>
                  <div className="absolute w-40 h-8 bg-[#2763f8]/20 blur-md -mb-16"></div>
                  <div className="absolute w-full h-full flex justify-center items-center">
                    <Image 
                      src="/robot1.png" 
                      alt="Project Vault Robot" 
                      width={120} 
                      height={120} 
                      className="mb-3 drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute top-6 right-12">
                  <div className="w-10 h-10 rounded-md bg-[#194278] flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 grid grid-cols-2 grid-rows-2 gap-[2px]">
                      <div className="bg-[#5a98e6]"></div>
                      <div className="bg-[#5a98e6]"></div>
                      <div className="bg-[#5a98e6]"></div>
                      <div className="bg-[#5a98e6]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-xl font-bold mb-6 text-yellow-300">$1,000 in Tokens</div>
              
              <button className="bg-gradient-to-r from-[#1f1d56] to-[#2a2878] text-white w-full py-3 rounded-md flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M7 6V18L17 12L7 6Z" fill="white"/>
                </svg>
                <Link href="/vault/play" className="relative z-10">
                <span>Play</span>
                </Link>
              </button>
            </div>
          </div>
          
          {/* Router AI Vault Card */}
          <div className="border border-[#2a2d6a] rounded-2xl bg-gradient-to-b from-[#1e1d42] to-[#14132a] p-5 pb-8 relative overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Router AI Vault</h2>
              <p className="text-[#a8b3cf] text-sm mb-6">Presented by ProjectName</p>
              
              <div className="h-64 flex justify-center items-center relative">
                <div className="w-44 h-44 rounded-full bg-[#0e0d28] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute w-36 h-36 rounded-full border border-[#2763f8]/30 animate-pulse"></div>
                  <div className="absolute w-40 h-8 bg-[#2763f8]/20 blur-md -mb-16"></div>
                  <div className="absolute w-full h-full flex justify-center items-center">
                    <Image 
                      src="/robot2.png" 
                      alt="Router AI Vault Robot" 
                      width={120} 
                      height={120} 
                      className="mb-3 drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <Image 
                    src="/images/coin.svg" 
                    alt="Coin" 
                    width={50} 
                    height={50}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
              
              <div className="text-xl font-bold mb-6 text-yellow-300">$1,000 in ProductName</div>
              
              <button className="bg-gradient-to-r from-[#1f1d56] to-[#2a2878] text-white w-full py-3 rounded-md flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M7 6V18L17 12L7 6Z" fill="white"/>
                </svg>
                <span>Play</span>
              </button>
            </div>
          </div>
          
          {/* Protector Vault Card */}
          <div className="border border-[#2a2d6a] rounded-2xl bg-gradient-to-b from-[#1e1d42] to-[#14132a] p-5 pb-8 relative overflow-hidden group hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">Protector Vault</h2>
              <p className="text-[#a8b3cf] text-sm mb-6">Presented by ProjectName</p>
              
              <div className="h-64 flex justify-center items-center relative">
                <div className="w-44 h-44 rounded-full bg-[#0e0d28] flex justify-center items-center group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute w-36 h-36 rounded-full border border-[#2763f8]/30 animate-pulse"></div>
                  <div className="absolute w-40 h-8 bg-[#2763f8]/20 blur-md -mb-16"></div>
                  <div className="absolute w-full h-full flex justify-center items-center">
                    <Image 
                      src="/robot3.png" 
                      alt="Protector Vault Robot" 
                      width={120} 
                      height={120} 
                      className="mb-3 drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <Image 
                    src="/images/coin.svg" 
                    alt="Coin" 
                    width={50} 
                    height={50}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
              
              <div className="text-xl font-bold mb-6 text-yellow-300">$1,000 in Tokens</div>
              
              <button className="bg-gradient-to-r from-[#1f1d56] to-[#2a2878] text-white w-full py-3 rounded-md flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M7 6V18L17 12L7 6Z" fill="white"/>
                </svg>
                <span>Play</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

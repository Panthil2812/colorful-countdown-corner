
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  // Countdown timer state and logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date to 30 days from now
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Email subscription form
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    toast.success('Thank you for joining our waiting list!');
    setEmail('');
  };

  // Format time values to always have two digits
  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10">
        <div className="w-6 h-6 bg-red-400 rounded-full"></div>
      </div>
      <div className="absolute top-28 left-1/2 -translate-x-1/2">
        <div className="w-6 h-6 border-2 border-yellow-400 rotate-45"></div>
      </div>
      <div className="absolute bottom-40 right-10">
        <div className="w-6 h-6 border-2 border-yellow-400 rotate-45"></div>
      </div>
      <div className="absolute right-5 bottom-1/4">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-red-400"></div>
          ))}
        </div>
      </div>
      <div className="absolute right-40 bottom-1/4">
        <svg className="w-16 h-8" viewBox="0 0 60 20">
          <path 
            d="M0,10 Q15,20 30,10 Q45,0 60,10" 
            fill="none" 
            stroke="#F87171" 
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Illustration */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Coming Soon Illustration" 
                className="w-full max-w-2xl mx-auto"
                style={{ filter: 'opacity(0.15)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Customer Support Illustration - Placeholders */}
                  <div className="absolute left-5 top-10">
                    <div className="w-12 h-12 rounded-full border border-teal-400 flex items-center justify-center">
                      <span className="text-xs text-gray-600">24/7</span>
                    </div>
                  </div>
                  <div className="absolute left-20 top-5">
                    <div className="w-8 h-8 text-teal-500">+</div>
                  </div>
                  <div className="absolute right-40 top-20">
                    <div className="w-8 h-8 text-pink-400">°</div>
                  </div>
                  <div className="absolute left-32 bottom-40">
                    <div className="rounded-full w-12 h-12 border border-teal-400 flex items-center justify-center">
                      <span className="text-teal-500">✓</span>
                    </div>
                  </div>
                  <div className="absolute left-10 bottom-24">
                    <div className="w-16 h-16 rounded-full border border-yellow-400 flex items-center justify-center">
                      <div className="w-10 h-10 border-2 border-teal-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Chat bubbles */}
                  <div className="absolute right-20 top-32">
                    <div className="w-32 h-20 rounded-lg border border-yellow-400 p-2">
                      <div className="border-b border-yellow-400 w-full mb-1"></div>
                      <div className="border-b border-yellow-400 w-full mb-1"></div>
                      <div className="border-b border-yellow-400 w-20"></div>
                    </div>
                  </div>
                  <div className="absolute left-24 top-44">
                    <div className="w-32 h-20 rounded-lg border border-pink-400 p-2">
                      <div className="border-b border-pink-400 w-full mb-1"></div>
                      <div className="border-b border-pink-400 w-full mb-1"></div>
                      <div className="border-b border-pink-400 w-20"></div>
                    </div>
                  </div>
                  
                  {/* Phone icon */}
                  <div className="absolute left-60 top-32">
                    <div className="w-10 h-10 border-2 rounded-full border-black flex items-center justify-center transform rotate-45">
                      <div className="w-6 h-4 bg-black rounded-lg transform -rotate-45"></div>
                    </div>
                  </div>
                  
                  {/* People at desk */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-64 h-1 bg-gray-800"></div>
                    <div className="flex justify-center mt-4">
                      <div className="relative">
                        {/* Desk */}
                        <div className="w-80 h-4 bg-yellow-400 relative">
                          {/* Desk legs */}
                          <div className="absolute left-10 top-4 w-1 h-24 bg-gray-800"></div>
                          <div className="absolute right-10 top-4 w-1 h-24 bg-gray-800"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Coming Soon Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Coming Soon
            </h1>
            
            <p className="text-gray-600 mb-12 max-w-lg">
              The and greater, all hasn't revisit general up by her The soon my himself including it those from everything you necessary will didn't little.
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center lg:justify-start gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-800">
                  {formatTime(timeLeft.days)}
                </div>
                <div className="text-gray-600">Days</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-800">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-800">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-gray-600">Hours</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-800">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-800">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-gray-600">Minutes</div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-800">:</div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-800">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-gray-600">Seconds</div>
              </div>
            </div>
            
            {/* Email Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <Input
                type="email"
                placeholder="Enter Mail Address"
                className="border-gray-300 focus:border-teal-500 flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-teal-500 hover:bg-teal-600 text-white whitespace-nowrap"
              >
                Add Waiting List
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

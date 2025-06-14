
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Shield, Heart, MessageCircle, LogIn, UserPlus } from 'lucide-react';

interface LandingPageProps {
  onStartChat: () => void;
  onLogin: () => void;
  onSignup: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartChat, onLogin, onSignup }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center shadow-xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Mental Health Companion
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your supportive AI friend for mental wellness. Get personalized guidance, 
            coping strategies, and a safe space to share your thoughts and feelings.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Empathetic Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receive compassionate, non-judgmental support tailored to your emotional needs
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <CardTitle className="text-lg">Safe & Confidential</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your conversations are private and secure. Share freely in a judgment-free environment
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <CardTitle className="text-lg">24/7 Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get support whenever you need it. Your mental health companion is always here
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Ready to start your wellness journey?
            </h2>
            <p className="text-gray-600">
              Choose how you'd like to begin. You can start chatting immediately or create an account to save your progress.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onStartChat}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Chatting Now
            </Button>
            
            <div className="flex gap-3">
              <Button 
                onClick={onLogin}
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-50 px-6 py-3"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Login
              </Button>
              
              <Button 
                onClick={onSignup}
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-50 px-6 py-3"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            By using this service, you acknowledge this is for supportive conversations only. 
            For urgent mental health concerns, please contact a healthcare professional.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;

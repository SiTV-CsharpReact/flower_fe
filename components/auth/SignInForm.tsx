import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'

interface SignInFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignInForm({ open, onOpenChange }: SignInFormProps) {
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <DialogHeader className="p-6 text-center items-center">
          <DialogTitle className="text-xl font-normal text-center">SIGN IN</DialogTitle>
          <div className=' w-25 bg-black h-0.5'></div>
        </DialogHeader>
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <Input 
              placeholder="Your name" 
              className="h-12 px-4 border-gray-300 rounded-none focus:ring-0 focus:border-black"
            />
            <Input 
              type="password" 
              placeholder="Password" 
              className="h-12 px-4 border-gray-300 rounded-none focus:ring-0 focus:border-black"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="rounded-full border-gray-300 text-black focus:ring-0"
              />
              <label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me
              </label>
            </div>
            <button className="text-sm underline hover:text-gray-600">
              Lost your password?
            </button>
          </div>

          <div className="space-y-3">
            <Button 
              className="w-full h-12 cursor-pointer bg-black text-white hover:bg-gray-800 rounded-none"
            >
              LOGIN
            </Button>
            <Button 
              variant="outline"
              className="w-full cursor-pointer h-12 border-gray-300 hover:bg-gray-50 rounded-none"
            >
              CREATE AN ACCOUNT
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
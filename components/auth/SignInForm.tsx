import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { useRouter } from 'next/navigation'
import { setCookie } from '@/lib/utils'
import { useAccountStore } from '@/stores/Account.store';
import { toast } from "sonner"
interface SignInFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignInForm({ open, onOpenChange }: SignInFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const {
   setIsName
  } = useAccountStore();
  const handleLogin = async () => {
    setError('')
    try {
      const response = await fetch('https://localhost:2210/api/Account/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, rememberMe })
      })
      const data = await response.json()

      if (!response.ok) throw new Error(data.message || 'Login failed')
      toast("Đăng nhập thành công")
      setIsName(data.email)
      setCookie('access_token', data.token)
      router.push('/shop')
      onOpenChange(false)
    } catch (err) {
      setError(err?.message)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <DialogHeader className="p-6 text-center items-center">
          <DialogTitle className="text-xl font-normal text-center">SIGN IN</DialogTitle>
          <div className='w-25 bg-black h-0.5'></div>
        </DialogHeader>
        <div className="p-6 space-y-6">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="space-y-4">
            <Input 
              placeholder="Your name" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="h-12 px-4 border-gray-300 rounded-none focus:ring-0 focus:border-black"
            />
            <Input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleLogin}
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

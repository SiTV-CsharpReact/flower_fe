'use client'

import {
  Dialog as DialogPrimitive,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import { ReactNode } from "react"

interface DialogProps {
  trigger: ReactNode
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Dialog({
  trigger,
  title,
  description,
  children,
  className = "",
}: DialogProps) {
  return (
    <DialogPrimitive>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={`animate-scale-in sm:max-w-[425px] z-50 ${className}`}>
        {(title || description) && (
          <DialogHeader className="animate-slide-in">
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription className="animate-fade-in">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}
        <div className="animate-fade-in">
          {children}
        </div>
      </DialogContent>
    </DialogPrimitive>
  )
}

// Sử dụng:
/*
import { Dialog } from "@/components/share/Dialog"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <Dialog
      trigger={<Button>Mở dialog</Button>}
      title="Tiêu đề"
      description="Mô tả chi tiết về dialog này"
    >
      <div className="grid gap-4 py-4">
        Nội dung của dialog
      </div>
    </Dialog>
  )
}
*/ 
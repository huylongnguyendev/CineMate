"use client"

import { useEffect } from "react"
import { toast } from "sonner"

interface ToastState {
  status: number
  sucessText?: string
  errorText?: string
  warningText?: string
  infoText?: string
}

export default function Toast({
  status,
  sucessText,
  errorText,
}: ToastState) {

  useEffect(() => {
    if (status.toString().charAt(0) === "2" && sucessText)
      toast.success(sucessText)
    if (status.toString().charAt(0) === "4" || status.toString().charAt(0) === "5")
      toast.error(errorText)
  }, [errorText, status, sucessText])

  return null
}

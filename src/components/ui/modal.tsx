import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogCloseButton,
    DialogTrigger,
} from "@/components/ui/dialog"

const modalVariants = cva(
    "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] border border-border bg-background rounded-xl shadow-lg transition-all duration-200",
    {
        variants: {
            size: {
                xs: "max-w-[320px]",
                sm: "max-w-[400px]",
                md: "max-w-[480px]",
                lg: "max-w-[640px]",
                xl: "max-w-[800px]",
                full: "max-w-[calc(100vw-32px)] h-[calc(100vh-32px)]",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
)

export interface ModalProps
    extends React.ComponentPropsWithoutRef<typeof Dialog>,
    VariantProps<typeof modalVariants> {
    title?: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    trigger?: React.ReactNode;
    showClose?: boolean;
}

const Modal = ({
    title,
    description,
    children,
    footer,
    trigger,
    size,
    showClose = true,
    ...props
}: ModalProps) => {
    return (
        <Dialog {...props}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className={cn(modalVariants({ size }))}>
                {(title || showClose) && (
                    <DialogHeader>
                        <div className="flex flex-col gap-1">
                            {title && <DialogTitle>{title}</DialogTitle>}
                            {description && <DialogDescription>{description}</DialogDescription>}
                        </div>
                        {showClose && <DialogCloseButton />}
                    </DialogHeader>
                )}
                <div className="p-4 overflow-y-auto max-h-[80vh]">
                    {children}
                </div>
                {footer && <DialogFooter>{footer}</DialogFooter>}
            </DialogContent>
        </Dialog>
    )
}

Modal.displayName = "Modal"

export { Modal }

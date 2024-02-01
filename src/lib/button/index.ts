import Root from './button.svelte';
import { tv, type VariantProps } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';

const buttonVariants = tv({
	base:
		`w-min inline-flex items-center justify-center rounded-sm text-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 no-underline` +
		` focus-visible:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
	variants: {
		variant: {
			default:
				'bg-slate-500 text-slate-100 hover:bg-slate-600 focus:outline-slate-500 focus-visible:ring-slate-500/75',
			primary: 'bg-blue-800 text-blue-50 hover:bg-blue-900',
			success:
				'bg-emerald-600 text-emerald-50 hover:bg-emerald-700 focus:outline-emerald-500 focus-visible:ring-emerald-500/75',
			warning:
				'bg-amber-500 text-amber-50 hover:bg-amber-600 focus:outline-amber-500 focus-visible:ring-amber-500/75',
			secondary:
				'bg-violet-800 text-violet-50 hover:bg-violet-900 focus:outline-violet-800 focus-visible:ring-violet-800/75',
			accent:
				'bg-accent text-accent-foreground hover:bg-accent/80 focus:outline-sky-500 focus-visible:ring-sky-500/75',
			ghost:
				'bg-transparent text-accent dark:text-accent-foreground hover:bg-accent/80 hover:text-white focus:outline-sky-500 focus-visible:ring-sky-500/75',
			danger:
				'bg-red-600 text-red-50 hover:bg-red-700 focus:outline-red-500 focus-visible:ring-red-500/75',
			link: 'text-link hover:text-link-foreground underline-offset-2 hover:underline'
			// outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
		},
		size: {
			// default: 'h-10 px-4 py-2',
			// sm: 'h-9 px-3',
			md: 'px-4 py-2 text-base leading-6',
			sm: 'px-1 py-0 text-sm leading-5',
			lg: 'px-6 py-3 text-xl leading-7',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'md'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
	tooltip?: {
		text: string;
		side?: 'top' | 'bottom' | 'left' | 'right';
		openDelay?: number;
		closeDelay?: number;
		class?: string;
	};
};

type Events = ButtonPrimitive.Events;

export type ButtonVariants = Variant;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};

<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '../utils.js';
	import { buttonVariants, type Props, type Events } from './index.js';
	import { Tooltip, TooltipContent, TooltipTrigger, TooltipArrow } from '../tooltip__/index.js';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'md';
	let externalBuilders: $$Props['builders'] = [];
	export { externalBuilders as builders };
	export { className as class };

	export let tooltip: $$Props['tooltip'] = undefined;
	const hasTooltip = typeof tooltip !== 'undefined';

	const tooltipDefaults = { openDelay: 150, side: 'top', text: '' };
	const tooltipOptions = Object.assign(tooltipDefaults, tooltip) satisfies $$Props['tooltip'];
</script>

{#if hasTooltip}
	<Tooltip openDelay={tooltipOptions.openDelay} closeDelay={tooltipOptions.closeDelay}>
		<TooltipContent side={tooltipOptions.side} class={tooltipOptions.class}>
			<TooltipArrow />
			<p class="px-4 py-1">{tooltipOptions.text}</p>
		</TooltipContent>
		<TooltipTrigger asChild let:builder>
			<ButtonPrimitive.Root
				builders={[externalBuilders, builder].flat()}
				class={cn(buttonVariants({ variant, size, className }))}
				type="button"
				{...$$restProps}
				on:click
				on:keydown
			>
				<slot />
			</ButtonPrimitive.Root>
		</TooltipTrigger>
	</Tooltip>
{:else}
	<ButtonPrimitive.Root
		builders={externalBuilders}
		class={cn(buttonVariants({ variant, size, className }))}
		type="button"
		{...$$restProps}
		on:click
		on:keydown
	>
		<slot />
	</ButtonPrimitive.Root>
{/if}

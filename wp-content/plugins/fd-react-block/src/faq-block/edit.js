import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { title, items, accordionMode, summaryIcon, summaryIconImageUrl, summaryIconImageAlt } = attributes;

	const iconMap = {
		none: '',
		arrow: '➜',
		plus: '+',
		check: '✓',
		star: '★',
	};

	const selectedIcon = iconMap[summaryIcon] || '';

	const onSelectSummaryIconImage = (media) => {
		setAttributes({
			summaryIconImageUrl: media?.url || '',
			summaryIconImageAlt: media?.alt || '',
		});
	};

	const removeSummaryIconImage = () => {
		setAttributes({
			summaryIconImageUrl: '',
			summaryIconImageAlt: '',
		});
	};

	const updateItem = (index, field, value) => {
		const nextItems = [...items];
		nextItems[index] = {
			...nextItems[index],
			[field]: value,
		};
		setAttributes({ items: nextItems });
	};

	const addItem = () => {
		setAttributes({
			items: [
				...items,
				{
					question: __('New question', 'fd-react-block'),
					answer: __('New answer', 'fd-react-block'),
				},
			],
		});
	};

	const removeItem = (index) => {
		setAttributes({
			items: items.filter((_, itemIndex) => itemIndex !== index),
		});
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('FAQ Settings', 'fd-react-block')} initialOpen={true}>
					<SelectControl
						label={__('Accordion behavior', 'fd-react-block')}
						value={accordionMode}
						options={[
							{ label: __('Multi open', 'fd-react-block'), value: 'multi' },
							{ label: __('Single open', 'fd-react-block'), value: 'single' },
						]}
						onChange={(value) => setAttributes({ accordionMode: value })}
					/>
					<SelectControl
						label={__('Leading icon for question', 'fd-react-block')}
						value={summaryIcon}
						options={[
							{ label: __('No icon', 'fd-react-block'), value: 'none' },
							{ label: __('Arrow', 'fd-react-block'), value: 'arrow' },
							{ label: __('Plus', 'fd-react-block'), value: 'plus' },
							{ label: __('Check', 'fd-react-block'), value: 'check' },
							{ label: __('Star', 'fd-react-block'), value: 'star' },
							{ label: __('Custom image', 'fd-react-block'), value: 'custom-image' },
						]}
						onChange={(value) => setAttributes({ summaryIcon: value })}
					/>
					{summaryIcon === 'custom-image' && (
						<>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectSummaryIconImage}
									allowedTypes={['image', 'image/svg+xml']}
									value={summaryIconImageUrl}
									render={({ open }) => (
										<Button variant="secondary" onClick={open}>
											{summaryIconImageUrl
												? __('Replace icon image', 'fd-react-block')
												: __('Upload icon image', 'fd-react-block')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{summaryIconImageUrl && (
								<Button variant="tertiary" onClick={removeSummaryIconImage}>
									{__('Remove icon image', 'fd-react-block')}
								</Button>
							)}
							<TextControl
								label={__('Icon image URL (PNG/JPG/SVG)', 'fd-react-block')}
								value={summaryIconImageUrl}
								onChange={(value) => setAttributes({ summaryIconImageUrl: value })}
								help={__('Use this if your WordPress setup blocks direct SVG uploads.', 'fd-react-block')}
							/>
							<TextControl
								label={__('Icon image alt text', 'fd-react-block')}
								value={summaryIconImageAlt}
								onChange={(value) => setAttributes({ summaryIconImageAlt: value })}
							/>
						</>
					)}
					<Button variant="primary" onClick={addItem}>
						{__('Add FAQ item', 'fd-react-block')}
					</Button>
				</PanelBody>
			</InspectorControls>

			<RichText
				tagName="h2"
				className="faq-block__title"
				value={title}
				onChange={(value) => setAttributes({ title: value })}
				placeholder={__('FAQ heading…', 'fd-react-block')}
			/>

			<div className="faq-block__list">
				{items.map((item, index) => (
					<details className="faq-block__item" open={index === 0} key={`faq-item-${index}`}>
						<summary className="faq-block__summary">
							{summaryIcon === 'custom-image' && summaryIconImageUrl ? (
								<span className="faq-block__leading-icon faq-block__leading-icon--image" aria-hidden="true">
									<img src={summaryIconImageUrl} alt="" />
								</span>
							) : selectedIcon ? (
								<span className="faq-block__leading-icon" aria-hidden="true">
									{selectedIcon}
								</span>
							) : null}
							<RichText
								tagName="span"
								className="faq-block__question"
								value={item.question}
								onChange={(value) => updateItem(index, 'question', value)}
								placeholder={__('Question…', 'fd-react-block')}
							/>
						</summary>
						<div className="faq-block__content">
							<RichText
								tagName="p"
								className="faq-block__answer"
								value={item.answer}
								onChange={(value) => updateItem(index, 'answer', value)}
								placeholder={__('Answer…', 'fd-react-block')}
							/>
							<Button
								variant="secondary"
								onClick={() => removeItem(index)}
								disabled={items.length === 1}
							>
								{__('Remove item', 'fd-react-block')}
							</Button>
						</div>
					</details>
				))}
			</div>

			<Button variant="primary" onClick={addItem}>
				{__('Add FAQ item', 'fd-react-block')}
			</Button>
		</div>
	);
}

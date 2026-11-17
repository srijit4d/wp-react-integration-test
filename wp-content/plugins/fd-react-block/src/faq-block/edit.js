import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { Button, PanelBody, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { title, items, accordionMode } = attributes;

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

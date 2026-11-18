import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { items, note, noteRef, noteAfter } = attributes;

	// Accepts an object so several fields change in one update
	const updateItem = (index, changes) => {
		const next = [...items];
		next[index] = { ...next[index], ...changes };
		setAttributes({ items: next });
	};

	const addItem = () =>
		setAttributes({
			items: [
				...items,
				{
					heading: __('New milestone', 'fd-react-block'),
					description: '<p>' + __('Describe this milestone.', 'fd-react-block') + '</p>',
					imageUrl: '',
					imageAlt: '',
					iconUrl: '',
					anchorId: '',
				},
			],
		});

	const removeItem = (index) =>
		setAttributes({ items: items.filter((_, i) => i !== index) });

	const moveItem = (index, direction) => {
		const target = index + direction;
		if (target < 0 || target >= items.length) return;
		const next = [...items];
		[next[index], next[target]] = [next[target], next[index]];
		setAttributes({ items: next });
	};

	return (
		<section {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Timeline Settings', 'fd-react-block')} initialOpen>
					<Button variant="primary" onClick={addItem}>
						{__('Add timeline item', 'fd-react-block')}
					</Button>
				</PanelBody>
				<PanelBody title={__('Footnote reference', 'fd-react-block')} initialOpen={false}>
					<TextControl
						label={__('Reference ID', 'fd-react-block')}
						value={noteRef}
						onChange={(value) => setAttributes({ noteRef: value })}
						help={__('Shown as a superscript link to #<id>. Leave empty for no link.', 'fd-react-block')}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="timeline-block__list">
				{items.map((item, index) => (
					<div className="timeline-block__row" key={`timeline-item-${index}`}>
						<div className="timeline-block__media">
							{item.imageUrl ? (
								<img
									className="timeline-block__image"
									src={item.imageUrl}
									alt={item.imageAlt || ''}
								/>
							) : (
								<div className="timeline-block__image-placeholder">
									{__('No image selected', 'fd-react-block')}
								</div>
							)}

							<div className="timeline-block__controls">
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) =>
											updateItem(index, {
												imageUrl: media?.url || '',
												imageAlt: media?.alt || '',
											})
										}
										allowedTypes={['image']}
										value={item.imageUrl}
										render={({ open }) => (
											<Button variant="secondary" onClick={open}>
												{item.imageUrl
													? __('Replace image', 'fd-react-block')
													: __('Upload image', 'fd-react-block')}
											</Button>
										)}
									/>
								</MediaUploadCheck>
								{item.imageUrl && (
									<Button
										variant="tertiary"
										isDestructive
										onClick={() => updateItem(index, { imageUrl: '', imageAlt: '' })}
									>
										{__('Remove image', 'fd-react-block')}
									</Button>
								)}
							</div>

							<TextControl
								label={__('Image alt text', 'fd-react-block')}
								value={item.imageAlt || ''}
								onChange={(value) => updateItem(index, { imageAlt: value })}
							/>
						</div>

						<div className="timeline-block__content">
							<RichText
								tagName="h4"
								className="timeline-block__heading"
								value={item.heading}
								onChange={(value) => updateItem(index, { heading: value })}
								placeholder={__('Milestone title…', 'fd-react-block')}
							/>

							<span className="timeline-block__icon">
								{item.iconUrl ? (
									<img src={item.iconUrl} alt="" />
								) : (
									<span className="timeline-block__icon-empty">
										{__('Icon', 'fd-react-block')}
									</span>
								)}
							</span>

							<RichText
								tagName="div"
								multiline="p"
								className="timeline-block__para"
								value={item.description}
								onChange={(value) => updateItem(index, { description: value })}
								placeholder={__('Milestone description…', 'fd-react-block')}
							/>

							<div className="timeline-block__controls">
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) => updateItem(index, { iconUrl: media?.url || '' })}
										allowedTypes={['image']}
										value={item.iconUrl}
										render={({ open }) => (
											<Button variant="secondary" onClick={open}>
												{item.iconUrl
													? __('Replace icon', 'fd-react-block')
													: __('Upload icon', 'fd-react-block')}
											</Button>
										)}
									/>
								</MediaUploadCheck>
								{item.iconUrl && (
									<Button
										variant="tertiary"
										isDestructive
										onClick={() => updateItem(index, { iconUrl: '' })}
									>
										{__('Remove icon', 'fd-react-block')}
									</Button>
								)}
							</div>

							<TextControl
								label={__('Anchor ID (for #links)', 'fd-react-block')}
								value={item.anchorId || ''}
								onChange={(value) =>
									updateItem(index, { anchorId: value.replace(/[^a-zA-Z0-9_-]/g, '') })
								}
							/>

							<div className="timeline-block__controls">
								<Button
									variant="secondary"
									onClick={() => moveItem(index, -1)}
									disabled={index === 0}
								>
									{__('Move up', 'fd-react-block')}
								</Button>
								<Button
									variant="secondary"
									onClick={() => moveItem(index, 1)}
									disabled={index === items.length - 1}
								>
									{__('Move down', 'fd-react-block')}
								</Button>
								<Button
									variant="secondary"
									isDestructive
									onClick={() => removeItem(index)}
									disabled={items.length === 1}
								>
									{__('Remove item', 'fd-react-block')}
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>

			<p className="timeline-block__note">
				<i>
					<RichText
						tagName="span"
						value={note}
						onChange={(value) => setAttributes({ note: value })}
						placeholder={__('Italic note (optional)…', 'fd-react-block')}
					/>
					{noteRef && <sup>{noteRef} </sup>}
					<RichText
						tagName="span"
						value={noteAfter}
						onChange={(value) => setAttributes({ noteAfter: value })}
						placeholder={__('Text after the reference (optional)…', 'fd-react-block')}
					/>
				</i>
			</p>

			<Button variant="primary" onClick={addItem}>
				{__('Add timeline item', 'fd-react-block')}
			</Button>
		</section>
	);
}
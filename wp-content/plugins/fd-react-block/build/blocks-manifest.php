<?php
// This file is generated. Do not modify it manually.
return array(
	'faq-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'fourthdimension/faq-block',
		'version' => '0.1.0',
		'title' => 'FAQ Block',
		'category' => 'widgets',
		'icon' => 'editor-help',
		'description' => 'Display a list of frequently asked questions with answers.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'accentTitle' => array(
				'type' => 'string',
				'default' => 'Rett Syndrome'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'FAQs'
			),
			'accordionMode' => array(
				'type' => 'string',
				'default' => 'multi'
			),
			'summaryIcon' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'summaryIconImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'summaryIconImageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'question' => 'What is Rett syndrome?',
						'answer' => 'Rett syndrome is a rare neurological condition that primarily affects girls.',
						'testimonialDes' => '',
						'testimonialAuthor' => ''
					),
					array(
						'question' => 'Where can I find support?',
						'answer' => 'Explore the Rett Resources section for caregiver, medical, and community support.',
						'testimonialDes' => '',
						'testimonialAuthor' => ''
					)
				)
			)
		),
		'textdomain' => 'fd-react-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'fd-react-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'fourthdimension/fd-react-block',
		'version' => '0.1.0',
		'title' => 'Copyright Date Block',
		'category' => 'widgets',
		'description' => 'Display rett life site’s copyright date.',
		'example' => array(
			
		),
		'supports' => array(
			'color' => array(
				'background' => false,
				'text' => true
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'fd-react-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'timeline-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'fourthdimension/timeline-block',
		'version' => '0.1.0',
		'title' => 'Timeline Block',
		'category' => 'widgets',
		'icon' => 'clock',
		'description' => 'Display timeline milestones for a journey, project, or care pathway.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'note' => array(
				'type' => 'string',
				'default' => ''
			),
			'noteRef' => array(
				'type' => 'string',
				'default' => ''
			),
			'noteAfter' => array(
				'type' => 'string',
				'default' => ''
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'heading' => 'Initial diagnosis',
						'description' => '<p>A key milestone in the journey with support planning started.</p>',
						'imageUrl' => '',
						'imageAlt' => '',
						'iconUrl' => '',
						'anchorId' => ''
					),
					array(
						'heading' => 'Community support',
						'description' => '<p>Family connected with support groups and specialist resources.</p>',
						'imageUrl' => '',
						'imageAlt' => '',
						'iconUrl' => '',
						'anchorId' => ''
					)
				)
			)
		),
		'textdomain' => 'fd-react-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);

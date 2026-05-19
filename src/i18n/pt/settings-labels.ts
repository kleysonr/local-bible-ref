import { PassageFormat } from 'src/passage-reference';
import { SettingsLabels } from '../models';
import { QuoteReferencePosition } from 'src/settings';

export const SETTINGS_LABELS: SettingsLabels = {
	required: {
		name: 'Obrigatório',
		controls: {
			biblesPath: {
				name: 'Caminho das Bíblias',
				description: 'O caminho para a pasta que contém as suas bíblias.',
				placeholder: 'ex. Data/Bibles',
			},
		},
	},

	optional: {
		name: 'Opcional',
		controls: {
			defaultVersion: {
				name: 'Versão padrão',
				description:
					'A versão a ser usada por padrão (atalho). Isso deve corresponder a uma pasta dentro da pasta das bíblias selecionada acima.',
				placeholder: 'ex. NVI',
			},
			defaultPassageFormat: {
				name: 'Formato de passagem padrão',
				description:
					'O formato markdown a ser usado para passagens por padrão.',
				options: {
					[PassageFormat.Manuscript]: 'Manuscrito',
					[PassageFormat.Paragraph]: 'Parágrafo',
					[PassageFormat.Quote]: 'Citação',
					[PassageFormat.Callout]: 'Callout (Destaque)',
				},
			},
			bibleFormat: {
				name: 'Formato da Bíblia',
				description:
					'O estilo de formatação que você usa para as bíblias no seu vault. O Local Bible Ref depende disso para analisar as passagens corretamente.',
			},
			fullPreview: {
				name: 'Pré-visualização Completa da Passagem',
				description:
					'Se a passagem completa deve ser exibida na pré-visualização em vez de apenas um trecho.',
			},
		},
	},

	quoteFormat: {
		name: 'Formato da citação',
		controls: {
			includeReference: {
				name: 'Incluir referência',
				description: 'Se deve incluir uma referência para a passagem.',
			},
			referencePosition: {
				name: 'Posição da referência',
				description: 'A posição da referência em relação ao texto citado.',
				options: {
					[QuoteReferencePosition.Beginning]: 'Início',
					[QuoteReferencePosition.End]: 'Fim',
				},
			},
			linkToPassage: {
				name: 'Link para a passagem',
				description:
					'Se a referência deve ser vinculada à passagem na sua Bíblia do vault.',
			},
		},
	},

	calloutFormat: {
		name: 'Formato de Callout',
		controls: {
			calloutType: {
				name: 'Tipo de Callout',
				description: 'O tipo de callout a ser usado para a passagem.',
			},
			linkToPassage: {
				name: 'Link para a passagem',
				description:
					'Se a referência deve ser vinculada à passagem na sua Bíblia do vault.',
			},
			collapsible: {
				name: 'Colapsável',
				description:
					'Se o callout a ser usado para a passagem pode ser colapsado.',
			},
		},
	},

	issues: {
		before:
			'Se você encontrar algum problema com o Local Bible Ref ou tiver sugestões de melhorias, por favor ',
		link: 'abra uma issue no GitHub',
		after: '.',
	},
};

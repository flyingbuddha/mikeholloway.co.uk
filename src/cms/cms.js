
import CMS from 'netlify-cms-app'

import BlogPreview from './preview-templates/BlogPreview'
import RecommendationReview from './preview-templates/RecommendationPreview'

CMS.registerPreviewTemplate('blog', BlogPreview)
CMS.registerPreviewTemplate('recommendation', RecommendationReview)

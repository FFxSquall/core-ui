import SelectableBehavior from '../../../models/behaviors/SelectableBehavior';
import HighlightableBehavior from '../../../models/behaviors/HighlightableBehavior';

export default function(model) {
    _.extend(this, new SelectableBehavior.Selectable(model));
    _.extend(this, new HighlightableBehavior(model));
}

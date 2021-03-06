# SizeInfo Visual Variable

The sizeInfo visual variable defines how size is applied to features based on the values of a numeric field attribute. The minimum and maximum values of the data should be indicated along with their respective size values. You must specify either `minSize` and `maxSize`, or `stops`, or `valueUnit` to construct the size ramp. All features with values falling in between the specified min and max data values (or stops) will be scaled proportionally between the provided min and max sizes.

### Properties

| Property | Details
| --- | ---
| axis | Defines the axis the size visual variable should be applied to when rendering features with an ObjectSymbol3DLayer.<br>Must be one of the following values:<ul><li>`width`</li><li>`height`</li><li>`depth`</li><li>`widthAndDepth`</li><li>`all`</li></ul>
| field | Attribute field used for size rendering if no valueExpression is provided.
| [legendOptions](visualVariableLegendOptions.md) | Options available for the legend for visual variables.
| maxDataValue | The maximum data value.
| maxSize | Specifies the maximum size to be applied to the symbol. This is required if valueUnit is set to `unknown`.
| minDataValue | The minimum data value.
| minSize | Specifies the minimum size to be applied to the symbol. This is required if valueUnit is set to `unknown`.
| normalizationField | Attribute field used to normalize the data.
| [stops](sizeStop.md) | An array of objects that defines the thematic size ramp in a sequence of data or expression stops. At least two stops are required. The stops must be listed in ascending order based on the value of the `value` property in each stop. This property is required if `minDataValue`, `maxDataValue`, `minSize`, and `maxSize` are not defined.
| target | Only used when sizeInfo is used for polygon outlines.<br>Value of this property must be `outline`
| type | Specifies the type of visual variable.<br>Value of this property must be `sizeInfo`
| useSymbolValue | When setting a size visual variable on a renderer using an ObjectSymbol3DLayer, this property indicates whether to apply the value defined by the height, width, or depth properties to the corresponding axis of this visual variable instead of proportionally scaling this axis' value after other axes.
| valueExpression | An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.
| valueExpressionTitle | The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.
| valueRepresentation | Specifies how to apply the data value when mapping real-world sizes. See table below for supported values.<br>Must be one of the following values:<ul><li>`radius`</li><li>`diameter`</li><li>`area`</li><li>`width`</li><li>`distance`</li></ul>
| valueUnit | A string value indicating the unit of measurement. Defaults to `meters` if not set.<br>Must be one of the following values:<ul><li>`unknown`</li><li>`inches`</li><li>`feet`</li><li>`yards`</li><li>`miles`</li><li>`nautical-miles`</li><li>`millimeters`</li><li>`centimeters`</li><li>`decimeters`</li><li>`meters`</li><li>`kilometers`</li><li>`decimal-degrees`</li></ul>


### sizeInfo Example

Live sample web scene showing [use of the sizeInfo visual variable](https://www.arcgis.com/home/webscene/viewer.html?webscene=ed2892fef34b43b8a5cc61c8ff890c6f).

```json
{
  "visualVariables": [
    {
      "type": "sizeInfo",
      "field": "Deaths",
      "axis": "all",
      "minSize": 6,
      "maxSize": 37,
      "minDataValue": 2814,
      "maxDataValue": 121179
    }
  ]
}
```
### sizeInfo with stops Example

```json
{
  "visualVariables": [
    {
      "type": "sizeInfo",
      "field": "Deaths",
      "stops": [
        {
          "value": 2814,
          "size": 6
        },
        {
          "value": 121179,
          "size": 37
        }
      ]
    }
  ]
}
```


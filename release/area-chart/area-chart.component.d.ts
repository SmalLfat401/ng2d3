/// <reference types="core-js" />
import { EventEmitter, OnInit, OnChanges } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChart } from '../common/base-chart.component';
export declare class AreaChart extends BaseChart implements OnInit, OnChanges {
    dims: ViewDimensions;
    xDomain: any;
    yDomain: any;
    seriesDomain: any;
    xScale: any;
    yScale: any;
    transform: string;
    colors: Function;
    clipPathId: string;
    clipPath: string;
    scaleType: string;
    series: any;
    view: any;
    results: any;
    margin: number[];
    scheme: any;
    legend: any;
    state: any;
    customColors: any;
    xAxis: any;
    yAxis: any;
    autoScale: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    timeline: any;
    gradient: boolean;
    clickHandler: EventEmitter<{}>;
    ngOnInit(): void;
    ngOnChanges(): void;
    update(): void;
    getXDomain(): any[];
    getYDomain(): number[];
    getSeriesDomain(): any;
    getXScale(): any;
    getYScale(): any;
    getScaleType(values: any): string;
    isDate(value: any): boolean;
    click(data: any, series: any): void;
    setColors(): void;
}

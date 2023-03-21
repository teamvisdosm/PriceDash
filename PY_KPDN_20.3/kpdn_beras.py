import pandas as pd
from pyecharts import options as opts
from pyecharts.charts import Bar,Calendar, Tab, Line, Page
from pathlib import Path
from pyecharts.options import ComponentTitleOpts
from pyecharts.components import Table
from pyecharts.globals import ThemeType
from pyecharts.commons.utils import JsCode

df = pd.read_parquet("E:/PI/data/price_kpdn.parquet")
df = df[df['item_category'] == 'BERAS']
df['date']=pd.to_datetime(df['date'], format='%d/%m/%Y')

df1 = df.groupby(by = ['date', 'state', 'district', 'title'], group_keys=False).mean()[['price']].apply(lambda x:x).reset_index()

grouped = df1.groupby(['state', 'district', 'title'])

for (state, district, title), group in grouped:

    line = Line(init_opts=opts.InitOpts(width='100%', theme=ThemeType.SHINE, animation_opts=opts.AnimationOpts(animation_delay=100, animation_easing="elasticOut")))
    line.add_xaxis(group['date'].dt.strftime('%d/%m/%Y').tolist())
    line.add_yaxis('', group['price'].round(1).tolist(), label_opts=opts.LabelOpts(is_show=False), color='#697ABA')

    line.set_global_opts(
                datazoom_opts=[opts.DataZoomOpts(pos_bottom='0%', range_start=0, range_end=100)],
                legend_opts=opts.LegendOpts(is_show=True, type_='scroll', pos_top='5%', selected_mode='multiple', border_width=0),
                title_opts=opts.TitleOpts(title='', subtitle=" ", pos_top="0"),
                tooltip_opts=opts.TooltipOpts(is_show=True, trigger="axis", axis_pointer_type="line", textstyle_opts=opts.TextStyleOpts(color="white")),
                toolbox_opts=opts.ToolboxOpts(is_show=True, orient='vertical', pos_left='92%', pos_top=100, item_gap=10, feature={'restore': {'title': 'Restore'}, 'saveAsImage': {'title': 'Save Image'},'dataView': {'title': 'Text View', 'lang': ['Text View', 'Close', 'Refresh']},'magicType': {'type': ['line', 'bar'], 'title': { 'line': 'Line View', 'bar': 'Bar View' } }}),
                xaxis_opts=opts.AxisOpts(
                    axistick_opts=opts.AxisTickOpts(is_show=False),
                    is_scale=False,
                    boundary_gap=False, offset=0, axisline_opts=opts.AxisLineOpts(is_on_zero=False),
                    splitline_opts=opts.SplitLineOpts(is_show=False)
                ),
                yaxis_opts=opts.AxisOpts(
                    is_scale=True, axisline_opts=opts.AxisLineOpts(is_on_zero=False),
                    splitline_opts=opts.SplitLineOpts(is_show=False)
                ),
            )

    file_path = "E:/PI/charts/BERAS/DISTRICT/{}_{}_{}.html".format(title.replace("/", "_"), state, district)
    line.render(file_path)

################################################################################################################
################################################################################################################

df2 = df.groupby(by = ['date', 'state', 'premise_type', 'title'], group_keys=False).mean()[['price']].apply(lambda x:x).reset_index()
df2

gp_type = df2.groupby(['state', 'premise_type', 'title'])

for (state, premise_type, title), group in gp_type:
    line = Line(init_opts=opts.InitOpts(width='100%', theme=ThemeType.SHINE, animation_opts=opts.AnimationOpts(animation_delay=100, animation_easing="elasticOut")))
    line.add_xaxis(group['date'].dt.strftime('%d/%m/%Y').tolist())
    line.add_yaxis('', group['price'].round(1).tolist(), label_opts=opts.LabelOpts(is_show=False), color='#697ABA')

    line.set_global_opts(
                datazoom_opts=[opts.DataZoomOpts(pos_bottom='0%', range_start=0, range_end=100)],
                legend_opts=opts.LegendOpts(is_show=True, type_='scroll', pos_top='5%', selected_mode='multiple', border_width=0),
                title_opts=opts.TitleOpts(title='', subtitle=" ", pos_top="0"),
                tooltip_opts=opts.TooltipOpts(is_show=True, trigger="axis", axis_pointer_type="line", textstyle_opts=opts.TextStyleOpts(color="white")),
                toolbox_opts=opts.ToolboxOpts(is_show=True, orient='vertical', pos_left='92%', pos_top=100, item_gap=10, feature={'restore': {'title': 'Restore'}, 'saveAsImage': {'title': 'Save Image'},'dataView': {'title': 'Text View', 'lang': ['Text View', 'Close', 'Refresh']},'magicType': {'type': ['line', 'bar'], 'title': { 'line': 'Line View', 'bar': 'Bar View' } }}),
                xaxis_opts=opts.AxisOpts(
                    axistick_opts=opts.AxisTickOpts(is_show=False),
                    is_scale=False,
                    boundary_gap=False, offset=0, axisline_opts=opts.AxisLineOpts(is_on_zero=False),
                    splitline_opts=opts.SplitLineOpts(is_show=False)
                ),
                yaxis_opts=opts.AxisOpts(
                    is_scale=True, axisline_opts=opts.AxisLineOpts(is_on_zero=False),
                    splitline_opts=opts.SplitLineOpts(is_show=False)
                ),
            )

    file_path = "E:/PI/charts/BERAS/PREMISE/{}_{}_{}.html".format(title.replace("/", "_"), state, premise_type.replace("/", "_"))
    line.render(file_path)
package com.template.common.utils.excel;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.lang.reflect.Method;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 生成Excel的工具类
 */
public class PoiExcelUtil {

    private static Logger logger = LoggerFactory.getLogger(PoiExcelUtil.class);

    /**
     * 添加列表信息
     * sheet excelSheet
     * list 导出主要信息
     * fieldName 属性名称>数组对于表头 扩展属性格式extra.key
     * contextStyle 内容样式
     * isHaveSerial 是否添加序号
     */
    public static <T> void addContextByList(HSSFSheet sheet, List<T> list,
                                            String[] fieldName, HSSFCellStyle contextStyle, boolean isHaveSerial) {

        try {
            HSSFRow row = null;
            HSSFCell cell = null;
            if (list != null) {
                List<T> tList = (List<T>) list;
                T t = null;
                String value = "";
                for (int i = 0; i < list.size(); i++) {
                    row = sheet.createRow(i + 2);
                    for (int j = 0; j < fieldName.length; j++) {
                        t = tList.get(i);
                        value = objectToString(getFieldValueByName(fieldName[j], t));
                        /*if (isHaveSerial) {
                            //首列加序号
                            //if (row.getCell(0) != null && row.getCell(0).getStringCellValue() != null) {
                                cell = row.createCell(0);
                                cell.setCellValue(i+1);
                            cell.setCellStyle(contextStyle);
                            //}
                            cell = row.createCell(j + 1);
                            cell.setCellValue(value);
                        } else {
                            cell = row.createCell(j);
                            cell.setCellValue(value);
                        }*/
                        cell = row.createCell(j);
                        cell.setCellValue(value);
                        cell.setCellStyle(contextStyle);
                    }
                }
                for (int j = 1; j < fieldName.length; j++) {
                    sheet.autoSizeColumn(j); // 单元格宽度 以最大的为准
                }
            } else {
                row = sheet.createRow(2);
                cell = row.createCell(0);
            }
        } catch (Throwable e) {
            logger.error("填充内容出现错误：" + e.getMessage(), e);
        }
    }

    /**
     * <P>Object转成String类型，便于填充单元格</P>
     */
    public static String objectToString(Object object) {
        String str = "";
        if (object == null) {
        } else if (object instanceof Date) {
            DateFormat from_type = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = (Date) object;
            str = from_type.format(date);
        } else if (object instanceof String) {
            str = (String) object;
        } else if (object instanceof Integer) {
            str = ((Integer) object).intValue() + "";
        } else if (object instanceof Double) {
            str = ((Double) object).doubleValue() + "";
        } else if (object instanceof Long) {
            str = Long.toString(((Long) object).longValue());
        } else if (object instanceof Float) {
            str = Float.toHexString(((Float) object).floatValue());
        } else if (object instanceof Boolean) {
            str = Boolean.toString((Boolean) object);
        } else if (object instanceof Short) {
            str = Short.toString((Short) object);
        }
        return str;
    }

    /**
     * 添加标题(第一行)与表头(第二行)
     *
     * @param sheet excelSheet
     *              assettitle 表头>数组
     *              titleName 标题
     *              headerStyle 标题样式
     *              contextStyle  表头样式
     */
    public static void addTitle(HSSFSheet sheet, String[] assettitle, String titleName,
                                HSSFCellStyle headerStyle, HSSFCellStyle contextStyle) {
        sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, assettitle.length - 1));
        HSSFRow row = sheet.createRow(0);
        HSSFCell cell = row.createCell(0);
        cell.setCellValue(titleName);
        cell.setCellStyle(headerStyle);
        row = sheet.createRow(1);
        for (int i = 0; i < assettitle.length; i++) {
            cell = row.createCell(i);
            cell.setCellValue(assettitle[i]);
            cell.setCellStyle(contextStyle);
        }
    }

    /**
     * <p>
     * 根据属性名获取属性值
     * </p>
     * fieldName 属性名 object 属性所属对象
     * 支持Map扩展属性, 不支持List类型属性，
     * return 属性值
     */
    @SuppressWarnings("unchecked")
    public static Object getFieldValueByName(String fieldName, Object object) {
        try {
            Object fieldValue = null;
            if (StringUtils.hasLength(fieldName) && object != null) {
                String firstLetter = ""; // 首字母
                String getter = ""; // get方法
                Method method = null; // 方法
                String extraKey = null;
                // 处理扩展属性 extraData.key
                if (fieldName.indexOf(".") > 0) {
                    String[] extra = fieldName.split("\\.");
                    fieldName = extra[0];
                    extraKey = extra[1];
                }
                firstLetter = fieldName.substring(0, 1).toUpperCase();
                getter = "get" + firstLetter + fieldName.substring(1);
                method = object.getClass().getMethod(getter, new Class[]{});
                fieldValue = method.invoke(object, new Object[]{});
                if (extraKey != null) {
                    Map<String, Object> map = (Map<String, Object>) fieldValue;
                    fieldValue = map == null ? "" : map.get(extraKey);
                }
            }
            return fieldValue;
        } catch (Throwable e) {
            logger.error("获取属性值出现异常：" + e.getMessage(), e);
            return null;
        }
    }

    public static HSSFCellStyle getHeader(HSSFWorkbook workbook) {

        HSSFCellStyle style = workbook.createCellStyle();
        style.setAlignment(CellStyle.ALIGN_CENTER);
        style.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
        HSSFFont titleFont = workbook.createFont();
        titleFont.setFontName("Arial");
        titleFont.setFontHeightInPoints((short) 16);
        titleFont.setBoldweight(Font.BOLDWEIGHT_BOLD);
        style.setFont(titleFont);
        return style;
    }

    //内容样式
    public static HSSFCellStyle getContext(HSSFWorkbook workbook) {
        HSSFCellStyle style = workbook.createCellStyle();
        style.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
        style.setBorderRight(CellStyle.BORDER_THIN);
        style.setRightBorderColor(IndexedColors.GREY_50_PERCENT.getIndex());
        style.setBorderLeft(CellStyle.BORDER_THIN);
        style.setLeftBorderColor(IndexedColors.GREY_50_PERCENT.getIndex());
        style.setBorderTop(CellStyle.BORDER_THIN);
        style.setTopBorderColor(IndexedColors.GREY_50_PERCENT.getIndex());
        style.setBorderBottom(CellStyle.BORDER_THIN);
        style.setBottomBorderColor(IndexedColors.GREY_50_PERCENT.getIndex());
        HSSFFont dataFont = workbook.createFont();
        dataFont.setFontName("Arial");
        dataFont.setFontHeightInPoints((short) 10);
        style.setFont(dataFont);
        return style;
    }

    public static void buildExcelDocument(List<Object> dataList, String[] showName, String[] fieldName, String filename, String titleName,
                                          HttpServletResponse response
    ) throws Exception {
        OutputStream os = null;
        try {
            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-Disposition", "attachment; filename="
                    + URLEncoder.encode(filename, "UTF-8"));
            os = response.getOutputStream();
            HSSFWorkbook workbook = new HSSFWorkbook();
            HSSFSheet sheet = workbook.createSheet(titleName);
            addTitle(sheet, showName, titleName, getHeader(workbook), getContext(workbook));
            addContextByList(sheet, dataList, fieldName, getContext(workbook), true);
            workbook.write(os);
        } catch (Throwable e) {
            logger.error("导出出错：" + e.getMessage(), e);
        } finally {
            try {
                os.flush();
                os.close();
            } catch (Throwable e) {
                logger.error("导出Excel出错：" + e.getMessage(), e);
            }
        }
    }

}
package com.template.testDemo;

import com.template.common.utils.StringUtils;

import java.io.File;
import java.io.IOException;

public class Test {

    public static void main(String[] args) throws IOException {
//        createFile("D:","d.txt");

        String a  = " ";
        System.out.println(StringUtils.isEmpty(a));//false
        System.out.println(StringUtils.isBlank(a));//true
        System.out.println(StringUtils.isNotEmpty(a));//true
        System.out.println(StringUtils.isNotBlank(a));//false
    }




    public static void createDir(String path){
        File dir=new File(path);
        if(!dir.exists())
            dir.mkdir();
    }

    public static void createFile(String path,String filename) throws IOException{
        File file=new File(path+"/"+filename);
        if(!file.exists())
            file.createNewFile();
    }
}

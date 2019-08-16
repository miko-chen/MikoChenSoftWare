-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.7.15-log - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.2.0.4947
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 template 的数据库结构
CREATE DATABASE IF NOT EXISTS `cold_chain` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cold_chain`;

/*
Navicat MySQL Data Transfer

Source Server         : 本地数据库
Source Server Version : 50715
Source Host           : localhost:3306
Source Database       : cold_chain

Target Server Type    : MYSQL
Target Server Version : 50715
File Encoding         : 65001

Date: 2019-05-14 18:25:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hy_base_code
-- ----------------------------
DROP TABLE IF EXISTS `hy_base_code`;
CREATE TABLE `hy_base_code` (
  `code_id` int(11) NOT NULL,
  `code_type` varchar(50) NOT NULL,
  `code_name` varchar(50) NOT NULL,
  `code_value` varchar(50) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `order_column` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  PRIMARY KEY (`code_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_basicequipment_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_basicequipment_info`;
CREATE TABLE `hy_basicequipment_info` (
  `equipment_id` int(11) NOT NULL,
  `equipment_no` varchar(50) NOT NULL,
  `equipment_type_num` varchar(50) NOT NULL,
  `equipment_name` varchar(100) NOT NULL,
  `manufacturer` varchar(50) NOT NULL,
  `equipment_status` int(11) NOT NULL,
  `equipment_type` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`equipment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_basic_vehicle_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_basic_vehicle_info`;
CREATE TABLE `hy_basic_vehicle_info` (
  `vehicle_id` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `vehicle_num` int(11) NOT NULL,
  `vehicle_color` int(11) NOT NULL,
  `vehicle_type` int(11) DEFAULT NULL,
  `org_structure` int(11) NOT NULL,
  `vehicle_oper_status` int(11) NOT NULL,
  `terminal_num` varchar(100) NOT NULL,
  `network_type` int(11) NOT NULL,
  `Business_route` int(11) NOT NULL,
  `is_truck` tinyint(1) DEFAULT NULL,
  `Driver_name` varchar(50) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`vehicle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_business_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_business_info`;
CREATE TABLE `hy_business_info` (
  `business_id` int(11) NOT NULL,
  `bussiness_no` varchar(50) NOT NULL,
  `bussiness_name` varchar(50) NOT NULL,
  `bussiness_status` int(11) DEFAULT NULL,
  `bussiness_type` int(11) DEFAULT NULL,
  `bussiness_scope` int(11) DEFAULT NULL,
  `post_code` varchar(50) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `bussiness_leader_no` varchar(50) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`business_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_bussiness_leader
-- ----------------------------
DROP TABLE IF EXISTS `hy_bussiness_leader`;
CREATE TABLE `hy_bussiness_leader` (
  `leader_id` int(11) NOT NULL,
  `leader_no` varchar(50) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `leader_name` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `wechat` varchar(50) DEFAULT NULL,
  `QQ` varchar(50) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`leader_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_car_evaluate
-- ----------------------------
DROP TABLE IF EXISTS `hy_car_evaluate`;
CREATE TABLE `hy_car_evaluate` (
  `car_evaluate_id` int(11) NOT NULL,
  `car_no` varchar(50) DEFAULT NULL,
  `order_no` varchar(50) DEFAULT NULL,
  `rapid_acceleration_times` int(11) DEFAULT NULL,
  `over_speed_times` int(11) DEFAULT NULL,
  `sharp_turn_times` int(11) DEFAULT NULL,
  `brakes_times` int(11) DEFAULT NULL,
  `score` double NOT NULL,
  `information` text,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  PRIMARY KEY (`car_evaluate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_dispatch
-- ----------------------------
DROP TABLE IF EXISTS `hy_dispatch`;
CREATE TABLE `hy_dispatch` (
  `dispatch_id` int(11) NOT NULL,
  `order_no` varchar(50) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `operator_no` varchar(50) NOT NULL,
  `position` varchar(200) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`dispatch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_dispatch_driver_relation
-- ----------------------------
DROP TABLE IF EXISTS `hy_dispatch_driver_relation`;
CREATE TABLE `hy_dispatch_driver_relation` (
  `relation_id` int(11) NOT NULL,
  `driver_no` varchar(50) DEFAULT NULL,
  `dispatch_id` int(11) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`relation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_driver_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_driver_info`;
CREATE TABLE `hy_driver_info` (
  `driver_id` int(11) NOT NULL,
  `driver_no` varchar(50) NOT NULL,
  `driver_name` varchar(20) NOT NULL,
  `sex` int(11) DEFAULT NULL,
  `birthday` varchar(20) DEFAULT NULL,
  `card_no` varchar(50) DEFAULT NULL,
  `driver_car_img` varchar(500) DEFAULT NULL,
  `qualification_certificate_img` varchar(500) DEFAULT NULL,
  `company_name` varchar(200) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `drive_age` int(11) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `driver_img` varchar(500) DEFAULT NULL,
  `card_front_img` varchar(500) DEFAULT NULL,
  `card_back_img` varchar(500) DEFAULT NULL,
  `escort_card_img` varchar(500) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`driver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_equipment_return_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_equipment_return_info`;
CREATE TABLE `hy_equipment_return_info` (
  `equipment_return_id` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `equipment_no` varchar(50) NOT NULL,
  `return_type` int(11) DEFAULT NULL,
  `return_infor` varchar(500) DEFAULT NULL,
  `return_time` datetime NOT NULL,
  `vehicle_state` varchar(500) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`equipment_return_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_equipment_use_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_equipment_use_info`;
CREATE TABLE `hy_equipment_use_info` (
  `equ_use_id` int(11) NOT NULL,
  `vehicle_id` varchar(50) NOT NULL,
  `equipment_id` varchar(50) NOT NULL,
  `equipment_position` int(11) DEFAULT NULL,
  `work_condition` int(11) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`equ_use_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_event_record
-- ----------------------------
DROP TABLE IF EXISTS `hy_event_record`;
CREATE TABLE `hy_event_record` (
  `event_id` int(11) NOT NULL,
  `driver_no` varchar(50) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `vehicle_color` int(11) DEFAULT NULL,
  `alarm_type` int(11) DEFAULT NULL,
  `alarm_level` int(11) DEFAULT NULL,
  `drive_start_time` datetime DEFAULT NULL,
  `event_start_time` datetime DEFAULT NULL,
  `drive_end_time` datetime DEFAULT NULL,
  `event_length` varchar(20) DEFAULT NULL,
  `event_status` int(11) DEFAULT NULL,
  `area` varchar(200) DEFAULT NULL,
  `operation_type` int(11) DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `deal_status` int(11) DEFAULT NULL,
  `receipt_infor` varchar(500) DEFAULT NULL,
  `event_infor` varchar(500) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_goods_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_goods_info`;
CREATE TABLE `hy_goods_info` (
  `goods_id` int(11) NOT NULL,
  `order_no` varchar(50) NOT NULL,
  `goods_name` varchar(100) DEFAULT NULL,
  `goods_type` int(11) DEFAULT NULL,
  `weight` varchar(20) DEFAULT NULL,
  `unit` int(11) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  PRIMARY KEY (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_goods_owner
-- ----------------------------
DROP TABLE IF EXISTS `hy_goods_owner`;
CREATE TABLE `hy_goods_owner` (
  `owner_id` int(11) NOT NULL,
  `owner_no` varchar(50) NOT NULL,
  `user_no` varchar(50) DEFAULT NULL,
  `owner_name` varchar(50) NOT NULL,
  `sex` int(11) DEFAULT NULL,
  `birthday` varchar(20) DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_ic_card_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_ic_card_info`;
CREATE TABLE `hy_ic_card_info` (
  `ic_id` int(11) NOT NULL,
  `ic_card_number` varchar(50) NOT NULL,
  `ic_id_num` varchar(50) NOT NULL,
  `state` int(11) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`ic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_ic_use_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_ic_use_info`;
CREATE TABLE `hy_ic_use_info` (
  `ic_id` int(11) NOT NULL,
  `ic_no` varchar(50) DEFAULT NULL,
  `driver_no` varchar(50) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`ic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='\r\n\r\n';

-- ----------------------------
-- Table structure for hy_illegal_driver_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_illegal_driver_info`;
CREATE TABLE `hy_illegal_driver_info` (
  `illegal_driver_id` int(11) NOT NULL,
  `driver_no` varchar(50) NOT NULL,
  `order_no` varchar(50) NOT NULL,
  `equipment_no` varchar(50) NOT NULL,
  `illegal_type` int(11) NOT NULL,
  `illegal_content` varchar(500) NOT NULL,
  `process_mode` int(11) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`illegal_driver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_message_record
-- ----------------------------
DROP TABLE IF EXISTS `hy_message_record`;
CREATE TABLE `hy_message_record` (
  `message_id` int(11) NOT NULL,
  `message_type` int(11) DEFAULT NULL,
  `message_title` varchar(100) NOT NULL,
  `message_info` varchar(500) DEFAULT NULL,
  `user_no` varchar(50) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT NULL,
  `create_user` varchar(50) DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_monitor_video_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_monitor_video_info`;
CREATE TABLE `hy_monitor_video_info` (
  `Monitor_video_id` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `equipment_no` varchar(50) NOT NULL,
  `video_path` varchar(500) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`Monitor_video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_operator_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_operator_info`;
CREATE TABLE `hy_operator_info` (
  `operator_id` int(11) NOT NULL,
  `operator_no` varchar(50) NOT NULL,
  `user_no` varchar(50) DEFAULT NULL,
  `operator_name` varchar(50) NOT NULL,
  `leader_no` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`operator_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_order_evaluate
-- ----------------------------
DROP TABLE IF EXISTS `hy_order_evaluate`;
CREATE TABLE `hy_order_evaluate` (
  `operator_evaluate_id` int(11) NOT NULL,
  `operator_no` varchar(50) DEFAULT NULL,
  `order_no` varchar(50) DEFAULT NULL,
  `delay_times` int(11) DEFAULT NULL,
  `goods_error_times` int(11) DEFAULT NULL,
  `score` double DEFAULT NULL,
  `information` text,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  PRIMARY KEY (`operator_evaluate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_order_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_order_info`;
CREATE TABLE `hy_order_info` (
  `order_id` int(11) NOT NULL,
  `order_no` varchar(50) NOT NULL,
  `consignor_no` varchar(50) NOT NULL,
  `consignor_name` char(10) DEFAULT NULL,
  `consignor_phone` char(10) DEFAULT NULL,
  `operator_no` varchar(50) NOT NULL,
  `start_area` varchar(200) DEFAULT NULL,
  `end_area` varchar(200) DEFAULT NULL,
  `receiver_name` varchar(50) DEFAULT NULL,
  `receiver_phone` varchar(50) DEFAULT NULL,
  `receive_error_remark` varchar(500) DEFAULT NULL,
  `order_remark` varchar(500) DEFAULT NULL,
  `plan_start_time` datetime DEFAULT NULL,
  `plan_end_time` datetime DEFAULT NULL,
  `payable_amount` decimal(10,0) DEFAULT NULL,
  `real_amount` decimal(10,0) DEFAULT NULL,
  `real_start_time` datetime DEFAULT NULL,
  `real_end_time` datetime DEFAULT NULL,
  `order_status` int(11) NOT NULL,
  `signatory` varchar(50) DEFAULT NULL,
  `is_split` tinyint(1) DEFAULT NULL,
  `dispatch_id` int(11) DEFAULT NULL,
  `is_child` tinyint(1) DEFAULT NULL,
  `main_order_id` int(11) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_order_pay_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_order_pay_info`;
CREATE TABLE `hy_order_pay_info` (
  `pay_id` int(11) NOT NULL,
  `order_no` varchar(50) NOT NULL,
  `consignor_no` varchar(50) NOT NULL,
  `pay_type` int(11) DEFAULT NULL,
  `pay_amount` decimal(10,0) NOT NULL,
  `pay_status` int(11) DEFAULT NULL,
  `pay_no` varchar(100) DEFAULT NULL,
  `out_trade_no` varchar(100) DEFAULT NULL,
  `pay_time` datetime DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  PRIMARY KEY (`pay_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_pub_message
-- ----------------------------
DROP TABLE IF EXISTS `hy_pub_message`;
CREATE TABLE `hy_pub_message` (
  `message_id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `infor` varchar(500) DEFAULT NULL,
  `create_user` varchar(50) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_route
-- ----------------------------
DROP TABLE IF EXISTS `hy_route`;
CREATE TABLE `hy_route` (
  `route_id` int(11) NOT NULL,
  `route_no` varchar(50) NOT NULL,
  `route_name` varchar(50) NOT NULL,
  `route_type` int(11) DEFAULT NULL,
  `route_group` int(11) DEFAULT NULL,
  `node_type` int(11) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`route_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_route_order_relation
-- ----------------------------
DROP TABLE IF EXISTS `hy_route_order_relation`;
CREATE TABLE `hy_route_order_relation` (
  `relation_id` int(11) NOT NULL,
  `order_no` varchar(50) DEFAULT NULL,
  `route_no` varchar(50) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`relation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_settlement_rules
-- ----------------------------
DROP TABLE IF EXISTS `hy_settlement_rules`;
CREATE TABLE `hy_settlement_rules` (
  `rules_id` int(11) NOT NULL,
  `vehicle_type` int(11) NOT NULL,
  `goods_type` int(11) NOT NULL,
  `formula` varchar(200) NOT NULL,
  PRIMARY KEY (`rules_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_system_role
-- ----------------------------
DROP TABLE IF EXISTS `hy_system_role`;
CREATE TABLE `hy_system_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_type` int(11) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_user
-- ----------------------------
DROP TABLE IF EXISTS `hy_user`;
CREATE TABLE `hy_user` (
  `user_id` int(11) NOT NULL,
  `user_no` varchar(50) NOT NULL,
  `real_name` varchar(50) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `organization_type` int(11) DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  `auth` int(11) DEFAULT NULL,
  `nick_name` varchar(50) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `birthday` varchar(50) DEFAULT NULL,
  `card_no` varchar(50) DEFAULT NULL,
  `user_type` int(11) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) NOT NULL,
  `last_modify_time` datetime NOT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_vehicle_accident_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_vehicle_accident_info`;
CREATE TABLE `hy_vehicle_accident_info` (
  `vehicle_acciden_key` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `time` datetime NOT NULL,
  `place` text NOT NULL,
  `accident_describe` text NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`vehicle_acciden_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_vehicle_gps_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_vehicle_gps_info`;
CREATE TABLE `hy_vehicle_gps_info` (
  `track_id` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `return_time` datetime NOT NULL,
  `longitude` varchar(50) NOT NULL,
  `latitude` varchar(50) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`track_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_vehicle_insurance
-- ----------------------------
DROP TABLE IF EXISTS `hy_vehicle_insurance`;
CREATE TABLE `hy_vehicle_insurance` (
  `vehicle_id` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `insurance_type` int(11) NOT NULL,
  `company` varchar(100) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `money` double NOT NULL,
  `policy_num` varchar(100) NOT NULL,
  `policy_status` int(11) NOT NULL,
  `agent` varchar(50) DEFAULT NULL,
  `agent_tel` varchar(50) DEFAULT NULL,
  `photo` varchar(500) NOT NULL,
  `remarks` longtext,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`vehicle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_vehicle_protect_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_vehicle_protect_info`;
CREATE TABLE `hy_vehicle_protect_info` (
  `vehicle_protec_id` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `protect_content` int(11) NOT NULL,
  `protect_place` varchar(200) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  PRIMARY KEY (`vehicle_protec_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_vehicle_review_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_vehicle_review_info`;
CREATE TABLE `hy_vehicle_review_info` (
  `vehicle_review_id` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `register_time` datetime NOT NULL,
  `effective_time` datetime NOT NULL,
  `people_count` int(11) NOT NULL,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  `state` int(11) NOT NULL,
  PRIMARY KEY (`vehicle_review_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for hy_vehicle_violation_info
-- ----------------------------
DROP TABLE IF EXISTS `hy_vehicle_violation_info`;
CREATE TABLE `hy_vehicle_violation_info` (
  `vehicle_violation_id` int(11) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `time` datetime NOT NULL,
  `place` varchar(200) NOT NULL,
  `illegal_code` int(11) NOT NULL,
  `illegal_describe` text,
  `create_user` varchar(50) NOT NULL,
  `create_time` datetime NOT NULL,
  `last_modify_user` varchar(50) DEFAULT NULL,
  `last_modify_time` datetime DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`vehicle_violation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for oa_notify
-- ----------------------------
DROP TABLE IF EXISTS `oa_notify`;
CREATE TABLE `oa_notify` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `type` char(1) COLLATE utf8_bin DEFAULT NULL COMMENT '类型',
  `title` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '标题',
  `content` varchar(2000) COLLATE utf8_bin DEFAULT NULL COMMENT '内容',
  `files` varchar(2000) COLLATE utf8_bin DEFAULT NULL COMMENT '附件',
  `status` char(1) COLLATE utf8_bin DEFAULT NULL COMMENT '状态',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建者',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '更新者',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  `remarks` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '备注信息',
  `del_flag` char(1) COLLATE utf8_bin DEFAULT '0' COMMENT '删除标记',
  PRIMARY KEY (`id`),
  KEY `oa_notify_del_flag` (`del_flag`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='通知通告';

-- ----------------------------
-- Table structure for oa_notify_record
-- ----------------------------
DROP TABLE IF EXISTS `oa_notify_record`;
CREATE TABLE `oa_notify_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `notify_id` bigint(20) DEFAULT NULL COMMENT '通知通告ID',
  `user_id` bigint(20) DEFAULT NULL COMMENT '接受人',
  `is_read` tinyint(1) DEFAULT '0' COMMENT '阅读标记',
  `read_date` date DEFAULT NULL COMMENT '阅读时间',
  PRIMARY KEY (`id`),
  KEY `oa_notify_record_notify_id` (`notify_id`),
  KEY `oa_notify_record_user_id` (`user_id`),
  KEY `oa_notify_record_read_flag` (`is_read`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='通知通告发送记录';

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept` (
  `dept_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) DEFAULT NULL COMMENT '上级部门ID，一级部门为0',
  `name` varchar(50) DEFAULT NULL COMMENT '部门名称',
  `order_num` int(11) DEFAULT NULL COMMENT '排序',
  `del_flag` tinyint(4) DEFAULT '0' COMMENT '是否删除  -1：已删除  0：正常',
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='部门管理';

-- ----------------------------
-- Table structure for sys_dict
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict`;
CREATE TABLE `sys_dict` (
  `id` bigint(64) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '标签名',
  `value` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '数据值',
  `type` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '类型',
  `description` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '描述',
  `sort` decimal(10,0) DEFAULT NULL COMMENT '排序（升序）',
  `parent_id` bigint(64) DEFAULT '0' COMMENT '父级编号',
  `create_by` int(64) DEFAULT NULL COMMENT '创建者',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` bigint(64) DEFAULT NULL COMMENT '更新者',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  `remarks` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '备注信息',
  `del_flag` char(1) COLLATE utf8_bin DEFAULT '0' COMMENT '删除标记',
  PRIMARY KEY (`id`),
  KEY `sys_dict_value` (`value`),
  KEY `sys_dict_label` (`name`),
  KEY `sys_dict_del_flag` (`del_flag`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='字典表';

-- ----------------------------
-- Table structure for sys_file
-- ----------------------------
DROP TABLE IF EXISTS `sys_file`;
CREATE TABLE `sys_file` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL COMMENT '文件类型',
  `url` varchar(200) DEFAULT NULL COMMENT 'URL地址',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8 COMMENT='文件上传';

-- ----------------------------
-- Table structure for sys_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_log`;
CREATE TABLE `sys_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL COMMENT '用户id',
  `username` varchar(50) DEFAULT NULL COMMENT '用户名',
  `operation` varchar(50) DEFAULT NULL COMMENT '用户操作',
  `time` int(11) DEFAULT NULL COMMENT '响应时间',
  `method` varchar(200) DEFAULT NULL COMMENT '请求方法',
  `params` varchar(5000) DEFAULT NULL COMMENT '请求参数',
  `ip` varchar(64) DEFAULT NULL COMMENT 'IP地址',
  `gmt_create` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=620 DEFAULT CHARSET=utf8 COMMENT='系统日志';

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `menu_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) DEFAULT NULL COMMENT '父菜单ID，一级菜单为0',
  `name` varchar(50) DEFAULT NULL COMMENT '菜单名称',
  `url` varchar(200) DEFAULT NULL COMMENT '菜单URL',
  `perms` varchar(500) DEFAULT NULL COMMENT '授权(多个用逗号分隔，如：user:list,user:create)',
  `type` int(11) DEFAULT NULL COMMENT '类型   0：目录   1：菜单   2：按钮',
  `icon` varchar(50) DEFAULT NULL COMMENT '菜单图标',
  `order_num` int(11) DEFAULT NULL COMMENT '排序',
  `gmt_create` datetime DEFAULT NULL COMMENT '创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8 COMMENT='菜单管理';

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `role_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) DEFAULT NULL COMMENT '角色名称',
  `role_sign` varchar(100) DEFAULT NULL COMMENT '角色标识',
  `remark` varchar(100) DEFAULT NULL COMMENT '备注',
  `user_id_create` bigint(255) DEFAULT NULL COMMENT '创建用户id',
  `gmt_create` datetime DEFAULT NULL COMMENT '创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8 COMMENT='角色';

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL COMMENT '角色ID',
  `menu_id` bigint(20) DEFAULT NULL COMMENT '菜单ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3706 DEFAULT CHARSET=utf8 COMMENT='角色与菜单对应关系';

-- ----------------------------
-- Table structure for sys_task
-- ----------------------------
DROP TABLE IF EXISTS `sys_task`;
CREATE TABLE `sys_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cron_expression` varchar(255) DEFAULT NULL COMMENT 'cron表达式',
  `method_name` varchar(255) DEFAULT NULL COMMENT '任务调用的方法名',
  `is_concurrent` varchar(255) DEFAULT NULL COMMENT '任务是否有状态',
  `description` varchar(255) DEFAULT NULL COMMENT '任务描述',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  `bean_class` varchar(255) DEFAULT NULL COMMENT '任务执行时调用哪个类的方法 包名+类名',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `job_status` varchar(255) DEFAULT NULL COMMENT '任务状态',
  `job_group` varchar(255) DEFAULT NULL COMMENT '任务分组',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `spring_bean` varchar(255) DEFAULT NULL COMMENT 'Spring bean',
  `job_name` varchar(255) DEFAULT NULL COMMENT '任务名',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL COMMENT '用户名',
  `name` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `dept_id` bigint(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(100) DEFAULT NULL COMMENT '手机号',
  `status` tinyint(255) DEFAULT NULL COMMENT '状态 0:禁用，1:正常',
  `user_id_create` bigint(255) DEFAULT NULL COMMENT '创建用户id',
  `gmt_create` datetime DEFAULT NULL COMMENT '创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '修改时间',
  `sex` bigint(32) DEFAULT NULL COMMENT '性别',
  `birth` datetime DEFAULT NULL COMMENT '出身日期',
  `pic_id` bigint(32) DEFAULT NULL,
  `live_address` varchar(500) DEFAULT NULL COMMENT '现居住地',
  `hobby` varchar(255) DEFAULT NULL COMMENT '爱好',
  `province` varchar(255) DEFAULT NULL COMMENT '省份',
  `city` varchar(255) DEFAULT NULL COMMENT '所在城市',
  `district` varchar(255) DEFAULT NULL COMMENT '所在地区',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL COMMENT '用户ID',
  `role_id` bigint(20) DEFAULT NULL COMMENT '角色ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8 COMMENT='用户与角色对应关系';

-- ----------------------------
-- Table structure for tb_token
-- ----------------------------
DROP TABLE IF EXISTS `tb_token`;
CREATE TABLE `tb_token` (
  `user_id` bigint(20) NOT NULL,
  `token` varchar(100) NOT NULL COMMENT 'token',
  `expire_time` datetime DEFAULT NULL COMMENT '过期时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户Token';

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `mobile` varchar(20) NOT NULL COMMENT '手机号',
  `password` varchar(64) DEFAULT NULL COMMENT '密码',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户';


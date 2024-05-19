import 'dart:convert';
import 'dart:io';
import 'dart:ui' as ui;
import 'dart:ui';

import 'package:afnek/data/models/amenity.dart';
import 'package:afnek/data/models/settings.dart';
import 'package:afnek/utils/colors.dart';
import 'package:afnek/utils/endpoints.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:geolocator/geolocator.dart';
import 'package:get/get.dart';

import 'api_service.dart';

class OtherService {
  static Future<String> uploadToAws(File file) async {
    final response =
        await NetworkApiService.postApiWithFile(ApiEndPoint.awsEndPoint, file);
    return response["FullPath"];
  }

  static Future<List<Amenity>> getAllAminty(File file) async {
    final response =
        await NetworkApiService.postApiWithFile(ApiEndPoint.awsEndPoint, file);
    return response["FullPath"];
  }

  static Future<Settings> getManagerSettings() async {
    final response =
        await NetworkApiService.getApi(ApiEndPoint.settingsEndPoint, null);
    return Settings.fromJson(json.decode(response.body.toString()));
  }

  static Future<DisplaySettings> getDisplaySettings() async {
    final response = await NetworkApiService.getApi(
        ApiEndPoint.displaySettingsEndPoint, null);
    return DisplaySettings.fromJson(json.decode(response.body.toString()));
  }

  static Future<Position?> determinePosition() async {
    LocationPermission permission;
    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
    }
    if (permission == LocationPermission.deniedForever) {
      Get.defaultDialog(
          title: 'Attention !'.tr,
          titleStyle: const TextStyle(
              color: Colors.red, fontSize: 20, fontWeight: FontWeight.bold),
          content: Text("enable location permission for continue please".tr),
          barrierDismissible: false,
          titlePadding: const EdgeInsets.symmetric(vertical: 12),
          contentPadding:
              const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
          actions: [
            TextButton(
              onPressed: () async {
                await Geolocator.openLocationSettings();
                permission = await Geolocator.checkPermission();
                if (permission != LocationPermission.denied &&
                    permission != LocationPermission.deniedForever) {
                  Get.back();
                }
              },
              child: Text(
                'Go to settings'.tr,
                style: const TextStyle(color: AppColors.textColor),
              ),
            ),
          ]);
    }
    if (permission != LocationPermission.denied &&
        permission != LocationPermission.deniedForever) {
      Get.back();
      return await Geolocator.getCurrentPosition();
    } else {
      return null;
    }
  }

  static double getZoomLevel(double radius) {
    double zoomLevel = 11;
    if (radius > 0) {
      double radiusElevated = radius + radius / 2;
      double scale = radiusElevated / 500;
    }
    zoomLevel = num.parse(zoomLevel.toStringAsFixed(2)).toDouble();
    return zoomLevel;
  }

  static Future<Uint8List> getBytesFromAsset(String path, int width) async {
    ByteData data = await rootBundle.load(path);
    ui.Codec codec = await instantiateImageCodec(data.buffer.asUint8List(),
        targetWidth: width);
    FrameInfo fi = await codec.getNextFrame();
    return (await fi.image.toByteData(format: ImageByteFormat.png))!
        .buffer
        .asUint8List();
  }
}

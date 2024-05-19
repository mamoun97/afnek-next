import 'dart:convert';
import 'dart:developer';

import 'package:afnek/routes/routes.dart';
import 'package:afnek/utils/endpoints.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';

import '../models/user.dart';
import 'api_service.dart';

class ProfileService {
  static Future<User> getUserInfo() async {
    final response =
        await NetworkApiService.getApi(ApiEndPoint.userProfile, null);
    if (response.statusCode == 200) {
      return User.fromJson(json.decode(response.body.toString()));
    } else {
      if (response.statusCode == 401) {
        await GetStorage().erase();
        Get.offAllNamed(AppRoutes.sginin);
        return User();
      } else {
        throw Exception("Error fetching data ${response.body}");
      }
    }
  }

  static Future<bool> updateUserInfo(User user) async {
    Map jsonMap = {
      "first_name": user.firstName,
      "last_name": user.lastName,
      "email": user.email,
      "phone": user.phone,
      "image": user.image,
    };
    final response =
        await NetworkApiService.patchApi(ApiEndPoint.userProfile, jsonMap);
    if (response.statusCode == 204) {
      return true;
    } else {
      log("Error fetching data");
      return false;
    }
  }
}

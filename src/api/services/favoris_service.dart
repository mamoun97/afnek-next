import 'dart:convert';
import 'dart:developer';

import 'package:afnek/data/models/fav_hotel.dart';
import 'package:afnek/data/services/api_service.dart';
import 'package:afnek/utils/endpoints.dart';
import 'package:afnek/utils/helpers.dart';
import 'package:get_storage/get_storage.dart';

class FavorisService {
  static Future createFavHotel(int idHotel) async {
    Map jsonMap = {
      "id_user": GetStorage().read("idUser"),
      "id_hotel": idHotel,
    };

    final res =
        await NetworkApiService.postApi(ApiEndPoint.favHotelEndPoint, jsonMap);
    if (Helpers.checkIsSuccess(res.statusCode)) {
      Helpers.showSnackBar("", "Added To Favoris Succses");
      return true;
    } else {
      Helpers.showSnackBar(
          "error", json.decode(res.toString())['message'].toString());
      return false;
    }
  }

  static Future<List<FavHotel>> getallFavHotels(int limit, int page) async {
    final Map<String, dynamic> data = {
      'limit': limit.toString(),
      'page': page.toString(),
      'relations': "hotel,hotel.tag"
    };
    final response =
        await NetworkApiService.getApi(ApiEndPoint.favHotelEndPoint, data);
    if (Helpers.checkIsSuccess(response.statusCode)) {
      return (json.decode(response.body.toString())["data"] as List)
          .map((idOrder) => FavHotel.fromJson(idOrder))
          .toList();
    } else {
      log("Error fetching data");
      return [];
    }
  }

  static Future<bool> removeFavHotel(int idHotelFav) async {
    final res = await NetworkApiService.deleteApi(
        "${ApiEndPoint.favHotelEndPoint}/$idHotelFav");
    if (res.statusCode == 204) {
      Helpers.showSnackBar("", "Deleted Favoris Succses");
      return true;
    } else {
      Helpers.showSnackBar(
          "error", json.decode(res.toString())['message'].toString());
      return false;
    }
  }
}

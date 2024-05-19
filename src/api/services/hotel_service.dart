import 'dart:convert';
import 'dart:developer';

import 'package:afnek/utils/endpoints.dart';
import 'package:afnek/utils/helpers.dart';

import '../models/hotel.dart';
import 'api_service.dart';

class HotelService {
  static Future<Hotel> readHotelData(int idHotel) async {
    final Map<String, dynamic> data = {
      "relations":
          "tag,room_type_hotel,room_type_hotel.room,room_type_hotel.gallery_type,room_type_hotel.room_type_globale"
    };
    final response = await NetworkApiService.getApi(
        "${ApiEndPoint.hotelEndPoint}/$idHotel", data);
    if (Helpers.checkIsSuccess(response.statusCode)) {
      return Hotel.fromJson(json.decode(response.body.toString()));
    } else {
      log("Error fetching data");
      return Hotel();
    }
  }
}

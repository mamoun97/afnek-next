import 'dart:convert';
import 'dart:developer';

import '../../utils/endpoints.dart';
import '../models/hotel.dart';
import 'api_service.dart';

class SearchService {
  static Future<List<Hotel>> getSearchHotels(String date) async {
    final Map<String, dynamic> data = {
      'limit': "10",
      'page': "0",
      "date": date
    };
    //   "relations": "tag,room_type_hotel,room_type_hotel.room,room_type_hotel.gallery_type,room_type_hotel.room_type_globale"

    final response =
        await NetworkApiService.getApi(ApiEndPoint.hotelEndPoint, data);
    if (response.statusCode == 200) {
      return (json.decode(response.body.toString())['data'] as List)
          .map((idOrder) => Hotel.fromJson(idOrder))
          .toList();
    } else {
      log("Error fetching data");
      return [];
    }
  }

  static Future<List<Hotel>> searchHotels(
      int limit, int page, String query) async {
    final Map<String, dynamic> data = {
      'limit': limit,
      'page': page,
      'search': page,
    };
    final response =
        await NetworkApiService.getApi(ApiEndPoint.hotelEndPoint, data);
    if (response.statusCode == 200) {
      return (json.decode(response.body.toString())["data"] as List)
          .map((idOrder) => Hotel.fromJson(idOrder))
          .toList();
    } else {
      log("Error fetching data");
      return [];
    }
  }
}

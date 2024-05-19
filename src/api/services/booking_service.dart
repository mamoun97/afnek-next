import 'dart:convert';
import 'dart:developer';

import 'package:afnek/data/models/booking.dart';
import 'package:afnek/data/services/api_service.dart';
import 'package:afnek/utils/endpoints.dart';
import 'package:afnek/utils/helpers.dart';

class BookingService {
  static Future<Booking?> createBooking(Map bookingData) async {
    final res = await NetworkApiService.postApi(
        ApiEndPoint.bookingEndPoint, bookingData);
    if (Helpers.checkIsSuccess(res.statusCode)) {
      return Booking.fromJson(json.decode(res.body.toString()));
    } else {
      Helpers.showSnackBar(
          "error", json.decode(res.toString())['message'].toString());
      return null;
    }
  }

  static Future<List<Booking>> getallBookings(int limit, int page) async {
    final Map<String, dynamic> data = {
      'limit': limit.toString(),
      'page': page.toString(),
      'relations': "hotel"
    };
    final response =
        await NetworkApiService.getApi(ApiEndPoint.bookingEndPoint, data);
    if (Helpers.checkIsSuccess(response.statusCode)) {
      return (json.decode(response.body.toString())["data"] as List)
          .map((idOrder) => Booking.fromJson(idOrder))
          .toList();
    } else {
      log("Error fetching data");
      return [];
    }
  }

  static Future<List<Booking>> getBookingsByState(
      int limit, int page, List state) async {
    Map<String, dynamic> data = {
      'limit': limit.toString(),
      'page': page.toString(),
      'relations': "hotel,hotel.wilaya"
      //  'filter': "state:in:$state"
    };

    final response =
        await NetworkApiService.getApi(ApiEndPoint.bookingEndPoint, data);
    if (Helpers.checkIsSuccess(response.statusCode)) {
      return (json.decode(response.body.toString())["data"] as List)
          .map((idOrder) => Booking.fromJson(idOrder))
          .toList();
    } else {
      log("Error fetching data");
      return [];
    }
  }

  static Future<bool> cancelBooking(int bookingId) async {
    final Map<String, dynamic> data = {'state': "cancelled_booking_client"};
    final res = await NetworkApiService.patchApi(
        "${ApiEndPoint.bookingEndPoint}/$bookingId", data);
    if (Helpers.checkIsSuccess(res.statusCode)) {
      return true;
    } else {
      return false;
    }
  }
}

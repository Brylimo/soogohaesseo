package com.server.soogohaesseo.dto.day;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GetDayRequestDto {
    private String date;
    private int userId;
}

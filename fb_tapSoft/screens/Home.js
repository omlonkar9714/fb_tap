import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postdata: [
        {
          key: 1,
          like: '5.7M',
          comment: '3M',
          share: '1M',
          time: 'Just now',
          name: 'Emma Watson',
          profileLogo:
            'https://assets.teenvogue.com/photos/58ff60c2d1f7bd403b5a2521/16:9/w_2560%2Cc_limit/GettyImages-648475260.jpg',
          description:
            'Emma Charlotte Duerre Watson (born 15 April 1990) is an English actress, model and activist. Born in Paris and brought up in Oxfordshire, Watson attended the Dragon School and trained as an actress at the Oxford branch of Stagecoach Theatre Arts. ... Her modelling work has included campaigns for Burberry and Lancôme.',
          image:
            'https://i.pinimg.com/originals/4c/e2/15/4ce215894f72449b478307a2ac2269ab.jpg',
        },
        //
        {
          key: 2,
          like: '5.7k',
          comment: '3k',
          share: '1k',
          time: '40Mins',
          name: 'Emma Stone',
          profileLogo:
            'https://api.pddataservices.com/images?url=https://postmediacanadadotcom.files.wordpress.com/2014/04/emma-stone-filming-the-am-010.jpg&w=302&h=226',
          description:
            'Emily Jean "Emma" Stone (born November 6, 1988) is an American actress. The recipient of numerous accolades, including an Academy Award and a Golden Globe Award, she was the worlds highest-paid actress in 2017.',
          image:
            'https://scstylecaster.files.wordpress.com/2016/05/emma-stone-haircut-hp.jpg',
        },
        {
          key: 3,
          like: '2.4k',
          comment: '1k',
          share: '1k',
          time: '2Hrs',
          name: 'Deepika Padukone',
          profileLogo: 'https://static.toiimg.com/photo/68507156.cms',
          description:
            'Padukone was born on 5 January 1986 in Copenhagen, Denmark to Konkani-speaking parents. Her father, Prakash Padukone, is a former professional badminton player and her mother, Ujjala, is a travel agent. Her younger sister, Anisha, is a golfer. ... The family relocated to Bangalore, India when Padukone was a year old.',
          image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deepika-padukone-ranveer-singh-gettyimages-1072341524.jpg',
        },
        //
        {
          key: 4,
          like: '9.7k',
          comment: '3.2k',
          share: '6k',
          time: '10Mins',
          name: 'Jacqueline Fernandez',
          profileLogo:
            'https://www.geo.tv/assets/uploads/updates/2020-03-05/275796_3649469_updates.jpg',
          description:
            'Jacqueline Fernandez (born 11 August 1985) is a Sri Lankan actress, former model, and the winner of the Miss Universe Sri Lanka pageant of 2006 who predominantly works in Bollywood. ... Born into a multiracial family of Canadian, Sri Lankan, and Malaysian descent, Fernandez was raised in Bahrain.',
          image:
            'https://www.geo.tv/assets/uploads/updates/2020-03-05/275796_3649469_updates.jpg',
        },
        {
          key: 5,
          like: '11.7k',
          comment: '34.3k',
          share: '1.9k',
          time: 'Just now',
          name: 'Kristen Stewart',
          profileLogo:
            'https://i.insider.com/5dc43307695b583b7368cc85?width=1100&format=jpeg&auto=webp',
          description:
            'Kristen Jaymes Stewart (born April 9, 1990) is an American actress and director. She is the recipient of several accolades, including a César Award, which she was the first American actress to win. She was the highest-paid actress in the world in 2010 and 2012. ... In 2010, she was awarded the BAFTA Rising Star Award.',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTprQqo6TBzfaFoB4rMzGfUsq3HTyABpdwnxX_bF92c8HgsCdhA',
        },
        {
          key: 6,
          like: '4.8k',
          comment: '9k',
          share: '6k',
          time: '3Hours',
          name: 'Megan Fox',
          profileLogo:
            'https://cdn.britannica.com/75/191075-050-DC41EAFD/Megan-Fox-2012.jpg',
          description:
            'Megan Denise Fox (born May 16, 1986) is an American actress and model. She began her acting career in 2001, with several minor television and film roles, and played a regular role on the Hope & Faith television sitcom. ... Fox is considered a sex symbol and has appeared in magazines such as Maxim, Rolling Stone, and FHM.',
          image:
            'data:image/jpeg;base64,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',
        },
        //
        {
          key: 7,
          like: '6.7k',
          comment: '4k',
          share: '3k',
          time: '7Hrs',
          name: 'Kangana Ranaut',
          profileLogo:
            'https://magarticles.magzter.com/articles/475/342931/5cb984bb32136/Kangana-Ranaut.jpg',
          description:
            'Kangana Ranaut (pronounced [kəŋɡənaː raːɳoːʈʰ]; born 23 March 1987) is an Indian actress and filmmaker who works in Hindi films. ... After training under the theatre director Arvind Gaur, Ranaut made her feature film debut in the 2006 thriller Gangster, for which she was awarded the Filmfare Award for Best Female Debut.',
          image:
            'https://magarticles.magzter.com/articles/475/342931/5cb984bb32136/Kangana-Ranaut.jpg',
        },
        {
          key: 8,
          like: '5.5k',
          comment: '2.3k',
          share: '3.6k',
          time: '8Mins',
          name: 'Scarlett Johansson',
          profileLogo: '',
          description:
            'Scarlett Johansson was born in New York City on November 22, 1984. She began acting as a child, and her role in the movie The Horse Whisperer brought her critical acclaim at age 13. ... Her recent films include Ghost in the Shell, Rough Night, Isle of Dogs and Avengers: Endgame',
          image:
            'https://cdn1.thr.com/sites/default/files/2019/12/thr_-_scarlett_johansson_-_photographed_by_kwaku_alston_-_h_2019.jpg',
        },
        {
          key: 9,
          like: '4.8k',
          comment: '3.2k',
          share: '3.1k',
          time: '9Hours',
          name: 'Sonam Kapoor',
          profileLogo:
            'https://pbs.twimg.com/profile_images/1145948449193566208/SvvELvMl_400x400.jpg',
          description:
            'Sonam Kapoor Ahuja (pronounced [soːnəm kəˈpuːr ]; born 9 June 1985) is an Indian film actress. ... She later made her acting debut in Bhansalis romantic drama Saawariya (2007), a box office flop, and had her first commercial success with the romantic comedy I Hate Luv Storys',
          image:
            'https://images.mygoodtimes.in/wp-content/uploads/2020/03/05074533/9D2B08A6-F841-4787-B4D0-61DF8D268DB5.jpeg',
        },
        {
          key: 10,
          like: '6.9k',
          comment: '1.3k',
          share: '4.5k',
          time: '10Mins',
          name: 'Anushka Sharma',
          profileLogo:
            'https://www.tvovermind.com/wp-content/uploads/2019/08/Anushka-Sharma.jpg',
          description:
            'Early life and modelling career. Anushka Sharma was born on 1 May 1988 in Ayodhya, Uttar Pradesh. Her father, Colonel Ajay Kumar Sharma, is an army officer, and her mother, Ashima Sharma, is a homemaker. Her father is a native of Uttar Pradesh, while her mother is a Garhwali.',
          image:
            'https://m.sakshi.com/sites/default/files/styles/cinema_main/public/article_images/2020/03/5/Anushka.jpg?itok=8Vomi1y0',
        },
        //
        {
          key: 11,
          like: '4.7k',
          comment: '5.3k',
          share: '3.1k',
          time: '11Hrs',
          name: 'Alexandra Daddario',
          profileLogo:
            'https://m.media-amazon.com/images/M/MV5BZWY1YWIwMjEtMGYxNi00MmZmLWE3ZmQtMDUxM2RmZjljZGYyXkEyXkFqcGdeQXVyODYwMzA2ODY@._V1_SY1000_SX1600_AL_.jpg',
          description:
            'Alexandra Anna Daddario is an American actress. She is known for playing Annabeth Chase in the Percy Jackson film series, Blake Gaines in San Andreas, Summer Quinn in Baywatch, and Emma Corrigan in Can You Keep a Secret?.',
          image:
            'https://www1.pictures.zimbio.com/fp/Alexandra+Daddario+Percy+Jackson+Sea+Monsters+fH9UxfJDfT-l.jpg',
        },
        {
          key: 12,
          like: '6.7k',
          comment: '7.3k',
          share: '9.1k',
          time: '12Mins',
          name: 'Shraddha Kapoor',
          profileLogo:
            'https://spiderimg.itstrendingnow.com/assets/images/2020/03/03/750x506/shraddha-kapoor_1583214836.jpeg',
          description:
            'Shraddha Kapoor is an Indian actress and singer who works in Hindi films. She features in listings of the most popular and the highest-paid actresses in India and was featured by Forbes Asia in their 30 Under 30 list of 2016',
          image:
            'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/01/varun-shraddha-1579784741.jpg',
        },
        {
          key: 13,
          like: '9.7k',
          comment: '6k',
          share: '8k',
          time: '13Hrs',
          name: 'Jennifer Lopez',
          profileLogo:
            'https://image.cnbcfm.com/api/v1/image/104376860-GettyImages-647177884.jpg?v=1574102788&w=1400&h=950',
          description:
            'Jennifer Lynn Lopez, also known by her nickname J.Lo, is an American actress, singer, dancer, fashion designer, producer, and businesswoman. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993.',
          image:
            'data:image/jpeg;base64,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',
        },
        {
          key: 14,
          like: '9.7k',
          comment: '8k',
          share: '3.3k',
          time: '14Mins',
          name: 'Kriti Sanon',
          profileLogo:
            'https://starsunfolded.com/wp-content/uploads/2015/08/Kriti-Sanon.jpg',
          description:
            'Kriti Sanon is an Indian actress who appears predominantly in Hindi films. She pursued an engineering degree from the Jaypee Institute of Information Technology, after which she briefly worked as a model. ',
          image:
            'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201904/Kartik_Aaryan__Kriti_Sanon_in_Luka_Chuppi.jpeg?1vpnBRfyR2G4Vowlwb0fwNRMXQn.pQRx',
        },
        {
          key: 15,
          like: '8.7k',
          comment: '3.4k',
          share: '1.8k',
          time: '15Hrs',
          name: 'Eva Green',
          profileLogo:
            'data:image/jpeg;base64,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',
          description:
            'Eva Gaëlle Green (French: [e.va ɡa.ɛl ɡʁeːn]; born July 6, 1980) is a French actress and model. ... She also starred as Vanessa Ives in the Showtime horror drama series Penny Dreadful (2014–2016), earning a nomination for Best Actress in a Television Series – Drama at the 73rd Golden Globe Awards.',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5rOA_EeHH4qyH2Bk_Kfgi2OTaqrx6Pq4xCjW_TC8lvOUxNt6o',
        },
        //
        //{key: 14, name: 'Post_16'},
        //{key: 16, name: 'Post_17'},
        // {key: 17, name: 'Post_18'},
      ],
      addata: [
        {
          key: 1,
          time: 'Just now',
          name: 'Amazon.com',
          profileLogo:
            'https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png',
          description: 'Amazing offers only on amazon.com',
          image:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Diwali17/GW/Friday1/load_750x375_3.jpg',
        },
        {
          key: 2,
          time: 'Just now',
          name: 'Muthoot Finance',
          profileLogo:
            'https://bsmedia.business-standard.com/_media/bs/img/article/2018-09/04/full/1536069914-2726.jpg',
          description: 'Get loan immeadiately.',
          image:
            'https://www.muthootfinance.com/assets/images_lan/New_Homepage_banner_8_jan.png',
        },
        {
          key: 3,
          time: 'Just now',
          name: 'Flipkart',
          profileLogo:
            'https://lh3.googleusercontent.com/proxy/rWWPgIbfcpPc7ZWdoocDH76MepbGUDheAkdGBNfVv3MNyn7c6Q45uw64nLY5mg3TVT8sKEoZq2TOZlacJSQqq6mY-eg81yoK9Yx3KFUr3ES84JoBFUyY6RDdnBjy',
          description:
            'Success is not a good teacher, failure makes you humble. Without hurting anybody, we all tend to laugh at others discomfort. When someone slips on a banana skin and falls its funny. Whenever I fail as a father or husband... a toy and a diamond always works.',
          image:
            'https://storiesflistgv2.azureedge.net/stories/2016/09/daily_offers_banner_Final.jpg',
        },
        {
          key: 4,
          time: 'Just now',
          name: 'Google',
          profileLogo:
            'https://storiesflistgv2.azureedge.net/stories/2016/09/daily_offers_banner_Final.jpg',
          description:
            'Success is not a good teacher, failure makes you humble. Without hurting anybody, we all tend to laugh at others discomfort. When someone slips on a banana skin and falls its funny. Whenever I fail as a father or husband... a toy and a diamond always works.',
          image:
            'https://storiesflistgv2.azureedge.net/stories/2016/09/daily_offers_banner_Final.jpg',
        },
        {
          key: 5,
          time: 'Just now',
          name: 'International Womens Day',
          profileLogo:
            'data:image/jpeg;base64,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',
          description: '8 March Happy World Women' + "'" + 's Day!!! :)',
          image:
            'https://timesofindia.indiatimes.com/thumb/msid-74478877,imgsize-909051,width-800,height-600,resizemode-4/74478877.jpg',
        },
      ],
      reqdata: [
        {
          key: 1,
          name: 'Ketty Perry',
          image:
            'https://shawglobalnews.files.wordpress.com/2019/08/ebysesouiaavwwc.jpg?quality=70&strip=all',
        },
        {
          key: 2,
          name: 'Bonnie Wright',
          image: 'https://miro.medium.com/max/1080/0*pw_RuMSKF5psfJ1a.',
        },
        {
          key: 3,
          name: 'Ellie Goulding',
          image: 'https://data.whicdn.com/images/64583113/original.jpg',
        },
        {
          key: 4,
          name: 'Jenifer Lawrence',
          image:
            'https://static.parade.com/wp-content/uploads/2019/08/jennifer-lawrence-quotes-ftr.jpg',
        },
        {
          key: 5,
          name: 'Alia Bhatt',
          image:
            'https://starsunfolded.com/wp-content/uploads/2014/05/Alia_Bhatt.jpg',
        },
      ],
      formatData: [],
    };
  }

  componentDidMount = () => {
    this._getDataReady();
  };

  _getDataReady = () => {
    let data = this.state.formatData;
    let c = 0;
    for (i = 0; i < 5; i++) {
      let dataItem = {
        postArray: [],
        reqArray: [],
        adArray: [],
      };
      if (i == 0) {
        dataItem.postArray = this.state.postdata.slice(i, 1);
        dataItem.reqArray = this.state.reqdata;
        dataItem.adArray.push(this.state.addata[i]);
      } else {
        dataItem.postArray = this.state.postdata.slice(
          2 * c + 1,
          2 * i + 1 + c,
        );
        dataItem.reqArray = this.state.reqdata;
        dataItem.adArray.push(this.state.addata[i]);
        c = c + 1;
      }
      data.push(dataItem);
      debugger;
    }
    this.setState({formatData: data});

    console.log('Formatted Data: ' + JSON.stringify(this.state.formatData));
  };

  _renderItem = Mainitem => {
    return (
      <View>
        {/* <Text>{JSON.stringify(Mainitem.item.postArray)}</Text> */}
        {/* <Text>{}</Text> 
        <Text>{JSON.stringify(Mainitem.item.reqArray)}</Text>
        <Text>{}</Text>
        <Text>{}</Text>
        <Text>{JSON.stringify(Mainitem.item.adArray)}</Text>
        <Text>{}</Text>
        <Text>{}</Text>
        <Text>{}</Text> */}
        {/* //post flatlist starts */}
        <FlatList
          style={{width: '100%'}}
          listKey={(item2, index) => 'D' + index.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 7,
                width: '100%',
                backgroundColor: '#cccccc',
              }}></View>
          )}
          keyExtractor={(item2, index) => index + Math.random() + 'ad'}
          data={Mainitem.item.postArray}
          renderItem={({item, index}) => (
            <View>
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  marginHorizontal: 10,
                  borderRadius: 10,

                  borderWidth: 1,
                  borderColor: '#cccccc',
                }}>
                <View style={{marginTop: 10, marginHorizontal: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Image
                        source={{
                          uri: item.profileLogo,
                        }}
                        style={{
                          borderRadius: 25,
                          height: 50,
                          width: 50,
                        }}></Image>
                    </View>
                    <View style={{marginLeft: 5}}>
                      <View style={{justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                      </View>
                      <View>
                        <Text style={{fontSize: 12, color: '#ccc'}}>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <Image
                        style={{height: 30, width: 30}}
                        source={{
                          uri:
                            'https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-13-512.png',
                        }}
                      />
                    </View>
                  </View>
                  <View style={{marginTop: 5, marginLeft: 25}}>
                    <Text>{item.description}</Text>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 20,
                    }}>
                    <Image
                      style={{
                        flex: 1,
                        aspectRatio: 1.5,
                        resizeMode: 'contain',
                      }}
                      source={{
                        uri: item.image,
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image
                      style={{height: 30, width: 30}}
                      source={{
                        uri:
                          'https://f0.pngfuel.com/png/131/300/facebook-messenger-like-button-emoji-face-heart-logo-png-clip-art.png',
                      }}
                    />
                    <View style={{justifyContent: 'center'}}>
                      <Text>{item.like}</Text>
                    </View>
                  </View>

                  <View>
                    <Text>{item.comment} Comments</Text>
                  </View>
                  <View>
                    <Text>{item.share} Shares</Text>
                  </View>
                </View>
                <View style={{alignItems: 'center'}}>
                  <View
                    style={{
                      marginTop: 5,
                      height: 1,
                      width: '90%',
                      backgroundColor: '#ccc',
                      overflow: 'hidden',
                    }}
                  />
                </View>
                <View
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 40,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 40,
                          width: 40,
                        }}
                        source={{
                          uri:
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8h50tPH5JduS9E9DU46uhM_H4IMlRPCXxps4A06jZdwD7Z9SF',
                        }}
                      />
                    </View>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text>Likes</Text>
                    </View>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 30,
                          width: 30,
                        }}
                        source={{
                          uri:
                            'https://thumbs.dreamstime.com/b/comment-icon-vector-illustration-white-background-127591271.jpg',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5,
                      }}>
                      <Text>Comments</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        style={{
                          height: 25,
                          width: 25,
                        }}
                        source={{
                          uri:
                            'https://www.searchpng.com/wp-content/uploads/2019/02/Share-icon-715x715.png',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text>Share</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
        <View
          style={{
            height: 5,
            width: '100%',
            backgroundColor: '#cccccc',
          }}></View>
        <FlatList
          style={{
            marginVertical: 5,
          }}
          horizontal={true}
          listKey={(item2, index) => 'D' + index.toString()}
          keyExtractor={(item2, index) => index + Math.random() + 'ad'}
          data={Mainitem.item.reqArray}
          renderItem={({item, index}) => (
            <View
              style={{
                borderColor: '#cccccc',
                borderWidth: 1,
                borderRadius: 10,
                marginRight: 10,
                width: 180,
              }}>
              <View>
                <View>
                  <Image
                    style={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      marginBottom: 10,
                      height: 200,
                    }}
                    source={{
                      uri: item.image,
                    }}></Image>
                </View>
                <View>
                  <Text
                    style={{marginLeft: 5, fontSize: 20, fontWeight: '700'}}>
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    padding: 5,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      padding: 5,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignContent: 'center',
                      height: 30,
                      backgroundColor: '#3b5998',
                      marginRight: 5,
                    }}>
                    <Text>Add Friend</Text>
                  </View>
                  <View
                    style={{
                      padding: 5,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignContent: 'center',
                      height: 30,
                      backgroundColor: '#ccc',
                      marginRight: 5,
                    }}>
                    <Text>Remove</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
        <View
          style={{
            height: 5,
            width: '100%',
            backgroundColor: '#cccccc',
          }}></View>
        <FlatList
          style={{
            marginVertical: 5,
          }}
          listKey={(item, index) => 'D' + index.toString()}
          keyExtractor={(item, index) => index + Math.random() + 'ad'}
          data={Mainitem.item.adArray}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 5,
                width: '100%',
                backgroundColor: '#cccccc',
              }}></View>
          )}
          renderItem={({item, index}) => (
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                marginHorizontal: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#cccccc',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View>
                  <Image
                    source={{
                      uri: item.profileLogo,
                    }}
                    style={{
                      borderRadius: 25,
                      height: 50,
                      width: 50,
                    }}></Image>
                </View>
                <View style={{marginLeft: 5}}>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 12, color: '#ccc'}}>
                      {item.time}
                    </Text>
                  </View>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={{
                      uri:
                        'https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-13-512.png',
                    }}
                  />
                </View>
              </View>
              <View style={{marginTop: 5, marginLeft: 25}}>
                <Text>{item.description}</Text>
              </View>
              <View style={{paddingHorizontal: 20}}>
                <Image
                  style={{
                    resizeMode: 'cover',
                    height: 200,
                    width: '100%',
                    marginTop: 10,
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Image
                    style={{height: 30, width: 30}}
                    source={{
                      uri:
                        'https://f0.pngfuel.com/png/131/300/facebook-messenger-like-button-emoji-face-heart-logo-png-clip-art.png',
                    }}
                  />
                  <View style={{justifyContent: 'center'}}>
                    <Text>1.4K</Text>
                  </View>
                </View>

                <View>
                  <Text>48 Comments</Text>
                </View>
                <View>
                  <Text>913 Shares</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    marginTop: 5,
                    height: 1,
                    width: '90%',
                    backgroundColor: '#ccc',
                    overflow: 'hidden',
                  }}
                />
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 40,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{
                        height: 40,
                        width: 40,
                      }}
                      source={{
                        uri:
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8h50tPH5JduS9E9DU46uhM_H4IMlRPCXxps4A06jZdwD7Z9SF',
                      }}
                    />
                  </View>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Likes</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{
                        height: 30,
                        width: 30,
                      }}
                      source={{
                        uri:
                          'https://thumbs.dreamstime.com/b/comment-icon-vector-illustration-white-background-127591271.jpg',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 5,
                    }}>
                    <Text>Comments</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                      }}
                      source={{
                        uri:
                          'https://www.searchpng.com/wp-content/uploads/2019/02/Share-icon-715x715.png',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginLeft: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>Share</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            padding: 5,
            backgroundColor: '#FFC0CB',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Happy World Women's Day !!!</Text>
        </View>
        <FlatList
          style={{width: '99%'}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.key + Math.random() + 'b'}
          data={this.state.formatData}
          renderItem={this._renderItem.bind(this)}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 5,
                width: '100%',
                backgroundColor: '#cccccc',
              }}></View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Home;
